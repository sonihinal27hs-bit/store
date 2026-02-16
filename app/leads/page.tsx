'use client'

import { useState, useEffect } from 'react'
import { Download, LogOut, Phone, User, MapPin, Calendar, Droplets, Trash2, Search, MessageCircle } from 'lucide-react'
import { getLeads, updateLeadStatus, deleteLead, type Lead, type LeadStatus } from '@/lib/leads'

const EMAIL = 'admin@waterproofingvadodara.com'
const PASSWORD = 'India@WP2026'
const AUTH_KEY = 'wp_leads_auth'

export default function LeadsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [leads, setLeads] = useState<Lead[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  useEffect(() => {
    const auth = localStorage.getItem(AUTH_KEY)
    if (auth === 'true') {
      setIsLoggedIn(true)
      setLeads(getLeads())
    }
    setIsLoading(false)
  }, [])

  const refreshLeads = () => setLeads(getLeads())

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (email === EMAIL && password === PASSWORD) {
      localStorage.setItem(AUTH_KEY, 'true')
      setIsLoggedIn(true)
      setLeads(getLeads())
    } else {
      setError('Invalid email or password')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY)
    setIsLoggedIn(false)
    setEmail('')
    setPassword('')
  }

  const handleStatusChange = (id: string, newStatus: string) => {
    updateLeadStatus(id, newStatus as LeadStatus)
    refreshLeads()
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      deleteLead(id)
      refreshLeads()
    }
  }

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = searchQuery === '' ||
      lead.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phoneNumber.includes(searchQuery) ||
      lead.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.serviceType.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const exportCSV = () => {
    const headers = ['Name', 'Phone', 'City', 'Service', 'Message', 'Status', 'Date']
    const rows = filteredLeads.map(l => [
      l.fullName, l.phoneNumber, l.city, l.serviceType,
      l.message || '', l.status || 'new',
      new Date(l.submittedAt).toLocaleDateString('en-IN')
    ])
    const csv = [headers, ...rows].map(r => r.map(c => `"${c}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `waterproofing-leads-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    )
  }

  // Login
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <Droplets className="w-12 h-12 text-blue-700 mx-auto mb-3" />
            <h1 className="text-2xl font-bold text-gray-900">India Waterproofing</h1>
            <p className="text-gray-500 text-sm">Admin Panel — Leads Dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="admin@waterproofingvadodara.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="Enter password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2.5 rounded-lg hover:bg-blue-800 transition font-bold text-lg"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Dashboard
  const newCount = leads.filter(l => !l.status || l.status === 'new').length
  const contactedCount = leads.filter(l => l.status === 'contacted').length
  const convertedCount = leads.filter(l => l.status === 'converted').length
  const rejectedCount = leads.filter(l => l.status === 'rejected').length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="flex items-center gap-3">
            <Droplets className="w-7 h-7 text-blue-700" />
            <div>
              <h1 className="text-lg font-bold text-gray-900">Leads Dashboard</h1>
              <p className="text-xs text-gray-500">India Waterproofing — {leads.length} total leads</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={refreshLeads}
              className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition text-sm font-medium">
              ↻ Refresh
            </button>
            <button onClick={exportCSV}
              className="flex items-center gap-1.5 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition text-sm font-medium">
              <Download className="w-4 h-4" /> Export CSV
            </button>
            <button onClick={handleLogout}
              className="flex items-center gap-1.5 bg-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-300 transition text-sm font-medium">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <button onClick={() => setStatusFilter('all')}
            className={`p-4 rounded-xl shadow-sm border-2 transition text-left ${statusFilter === 'all' ? 'border-blue-500 bg-blue-50' : 'border-transparent bg-white'}`}>
            <p className="text-gray-500 text-xs font-medium">Total Leads</p>
            <p className="text-3xl font-bold text-gray-900">{leads.length}</p>
          </button>
          <button onClick={() => setStatusFilter('new')}
            className={`p-4 rounded-xl shadow-sm border-2 transition text-left ${statusFilter === 'new' ? 'border-yellow-500 bg-yellow-50' : 'border-transparent bg-white'}`}>
            <p className="text-yellow-600 text-xs font-medium">🕐 New</p>
            <p className="text-3xl font-bold text-yellow-600">{newCount}</p>
          </button>
          <button onClick={() => setStatusFilter('contacted')}
            className={`p-4 rounded-xl shadow-sm border-2 transition text-left ${statusFilter === 'contacted' ? 'border-blue-500 bg-blue-50' : 'border-transparent bg-white'}`}>
            <p className="text-blue-600 text-xs font-medium">📞 Contacted</p>
            <p className="text-3xl font-bold text-blue-600">{contactedCount}</p>
          </button>
          <button onClick={() => setStatusFilter('converted')}
            className={`p-4 rounded-xl shadow-sm border-2 transition text-left ${statusFilter === 'converted' ? 'border-green-500 bg-green-50' : 'border-transparent bg-white'}`}>
            <p className="text-green-600 text-xs font-medium">✅ Converted</p>
            <p className="text-3xl font-bold text-green-600">{convertedCount}</p>
          </button>
        </div>

        {/* Search */}
        <div className="mb-4 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, phone, city, or service..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Leads Cards (mobile-friendly) */}
        {filteredLeads.length > 0 ? (
          <div className="space-y-3">
            {filteredLeads.map((lead) => (
              <div key={lead.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  {/* Lead Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <User className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="font-bold text-gray-900 truncate">{lead.fullName || '—'}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${
                        lead.status === 'converted' ? 'bg-green-100 text-green-700' :
                        lead.status === 'contacted' ? 'bg-blue-100 text-blue-700' :
                        lead.status === 'rejected' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {lead.status === 'converted' ? '✅ Converted' :
                         lead.status === 'contacted' ? '📞 Contacted' :
                         lead.status === 'rejected' ? '❌ Rejected' :
                         '🕐 New'}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1 text-sm">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <Phone className="w-3.5 h-3.5 text-gray-400" />
                        <a href={`tel:${lead.phoneNumber}`} className="text-blue-600 hover:underline font-medium">
                          {lead.phoneNumber || '—'}
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        <span>{lead.city || '—'}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <Droplets className="w-3.5 h-3.5 text-gray-400" />
                        <span className="truncate">{lead.serviceType || '—'}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-xs">{new Date(lead.submittedAt).toLocaleDateString('en-IN', {
                          day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                        })}</span>
                      </div>
                    </div>
                    {lead.message && (
                      <p className="mt-1.5 text-xs text-gray-500 bg-gray-50 rounded px-2 py-1 line-clamp-2">
                        💬 {lead.message}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a href={`https://wa.me/91${lead.phoneNumber?.replace(/\D/g, '').replace(/^91/, '')}?text=${encodeURIComponent(`Hi ${lead.fullName}, this is India Waterproofing. You enquired about ${lead.serviceType}. How can we help you?`)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition" title="WhatsApp">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <a href={`tel:${lead.phoneNumber}`}
                      className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition" title="Call">
                      <Phone className="w-4 h-4" />
                    </a>
                    <select
                      value={lead.status || 'new'}
                      onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                      className="px-2 py-1.5 rounded-lg text-xs font-medium border border-gray-200 bg-white text-gray-900 cursor-pointer"
                    >
                      <option value="new">🕐 New</option>
                      <option value="contacted">📞 Contacted</option>
                      <option value="converted">✅ Converted</option>
                      <option value="rejected">❌ Rejected</option>
                    </select>
                    <button onClick={() => handleDelete(lead.id)}
                      className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition" title="Delete">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
            <Droplets className="w-16 h-16 mx-auto mb-3 text-gray-200" />
            <p className="text-gray-500 font-medium">No leads yet</p>
            <p className="text-xs text-gray-400 mt-1">Leads will appear here when customers submit the enquiry form</p>
          </div>
        )}

        {/* Footer Note */}
        {rejectedCount > 0 && statusFilter !== 'rejected' && (
          <div className="mt-4 text-center">
            <button onClick={() => setStatusFilter('rejected')}
              className="text-xs text-gray-400 hover:text-red-500 transition">
              {rejectedCount} rejected lead{rejectedCount > 1 ? 's' : ''} hidden — click to view
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
