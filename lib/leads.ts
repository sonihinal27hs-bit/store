export type LeadStatus = "new" | "contacted" | "converted" | "rejected"

export interface Lead {
  id: string
  fullName: string
  phoneNumber: string
  city: string
  serviceType: string
  message: string
  email?: string
  propertyType?: string
  area?: string
  status: LeadStatus
  submittedAt: string
}

// Store leads in localStorage
const LEADS_KEY = "waterproofing_leads"

export const getLeads = (): Lead[] => {
  if (typeof window === "undefined") return []
  try {
    const stored = localStorage.getItem(LEADS_KEY)
    if (!stored) return []
    const data = JSON.parse(stored)
    return Array.isArray(data) ? data.map((lead: Record<string, unknown>) => ({
      ...lead,
      status: (lead.status as LeadStatus) || "new",
    })) as Lead[] : []
  } catch (error) {
    console.error("Error reading leads:", error)
    return []
  }
}

export const addLead = (lead: Partial<Omit<Lead, "id" | "submittedAt" | "status">>): Lead => {
  const newLead: Lead = {
    id: Date.now().toString(),
    fullName: lead.fullName || "",
    phoneNumber: lead.phoneNumber || "",
    city: lead.city || "",
    serviceType: lead.serviceType || "",
    message: lead.message || "",
    email: lead.email || "",
    propertyType: lead.propertyType || "",
    area: lead.area || "",
    status: "new",
    submittedAt: new Date().toISOString(),
  }

  if (typeof window !== "undefined") {
    try {
      const leads = getLeads()
      leads.unshift(newLead) // newest first
      localStorage.setItem(LEADS_KEY, JSON.stringify(leads))
    } catch (error) {
      console.error("Error saving lead:", error)
    }
  }

  return newLead
}

export const updateLeadStatus = (id: string, status: LeadStatus): void => {
  if (typeof window === "undefined") return
  try {
    const leads = getLeads()
    const updatedLeads = leads.map((lead) =>
      lead.id === id ? { ...lead, status } : lead
    )
    localStorage.setItem(LEADS_KEY, JSON.stringify(updatedLeads))
  } catch (error) {
    console.error("Error updating lead status:", error)
  }
}

export const deleteLead = (id: string): void => {
  if (typeof window === "undefined") return
  try {
    const leads = getLeads().filter((lead) => lead.id !== id)
    localStorage.setItem(LEADS_KEY, JSON.stringify(leads))
  } catch (error) {
    console.error("Error deleting lead:", error)
  }
}
