"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, AlertTriangle } from "lucide-react"
import { addLead } from "@/lib/leads"

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    businessName: "",
    businessCategory: "",
    location: "",
    websiteUrl: "",
    paymentScreenshot: null as File | null,
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, paymentScreenshot: file })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Save lead to localStorage
    addLead({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      businessName: formData.businessName,
      businessCategory: formData.businessCategory,
      location: formData.location,
      websiteUrl: formData.websiteUrl,
      paymentScreenshot: formData.paymentScreenshot?.name || "",
    })

    // Construct WhatsApp message
    const message = `
🚀 *LOCAL SEO ENQUIRY - DEPOSIT PAID* 🚀

• *Full Name:* ${formData.fullName}
• *Phone Number:* ${formData.phoneNumber}
• *Business Name:* ${formData.businessName}
• *Business Category:* ${formData.businessCategory}
• *Location:* ${formData.location}
• *Website:* ${formData.websiteUrl || "No website"}
• *Payment Screenshot:* ${formData.paymentScreenshot ? "Will attach separately" : "Not uploaded"}

―――――――――――――
_Sent via GoPlnr Website_
    `.trim()

    // Replace with your actual WhatsApp number (with country code, no + or spaces)
    const whatsappNumber = "916353583148"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")

    // Reset form and close dialog
    setFormData({
      fullName: "",
      phoneNumber: "",
      businessName: "",
      businessCategory: "",
      location: "",
      websiteUrl: "",
      paymentScreenshot: null,
    })
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="WhatsApp Enquiry"
      >
        <svg viewBox="0 0 24 24" className="h-9 w-9 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full animate-ping" />
      </button>

      {/* Enquiry Form Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[450px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">Start Your SEO Journey</DialogTitle>
            <DialogDescription>
              Pay ₹1,000 deposit • 100% refundable if no results in 30 days
            </DialogDescription>
          </DialogHeader>

          {/* Serious Enquiries Warning */}
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 flex items-start gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 font-medium">
              Serious enquiries only. Please pay ₹1,000 deposit before submitting.
            </p>
          </div>

          {/* QR Code Placeholder */}
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white border-2 border-dashed border-border rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xs text-muted-foreground text-center">QR<br/>Code</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Pay ₹1,000 Deposit</p>
                <p className="text-sm text-muted-foreground">UPI: 8128454804@indie</p>
                <p className="text-xs text-accent mt-1">Fully refundable if no ranking</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="floatFullName">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="floatFullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="floatPhoneNumber">
                Mobile Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="floatPhoneNumber"
                type="tel"
                placeholder="e.g., 98765 43210"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="floatBusinessName">
                Business Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="floatBusinessName"
                placeholder="e.g., Sharma Electronics"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="floatBusinessCategory">
                Business Category <span className="text-destructive">*</span>
              </Label>
              <Input
                id="floatBusinessCategory"
                placeholder="e.g., Dental Clinic, Restaurant, CA Firm"
                value={formData.businessCategory}
                onChange={(e) => setFormData({ ...formData, businessCategory: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="floatLocation">
                Location / City <span className="text-destructive">*</span>
              </Label>
              <Input
                id="floatLocation"
                placeholder="e.g., Mumbai, Delhi, Bangalore"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="floatWebsiteUrl">
                Website URL <span className="text-muted-foreground text-xs">(optional)</span>
              </Label>
              <Input
                id="floatWebsiteUrl"
                type="url"
                placeholder="e.g., https://yourbusiness.com"
                value={formData.websiteUrl}
                onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="floatPaymentScreenshot">
                Payment Screenshot <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <input
                  id="floatPaymentScreenshot"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex items-center gap-2 bg-muted border border-border rounded-md px-3 py-2">
                  <Upload className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground truncate">
                    {formData.paymentScreenshot ? formData.paymentScreenshot.name : "Upload payment screenshot"}
                  </span>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-base h-11">
              <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Submit & Start SEO
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              🔒 Your deposit is fully refundable if we don't rank you in 30 days.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
