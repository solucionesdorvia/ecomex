export type Requirement = {
  title: string;
  status: "required" | "in-review" | "approved";
  detail: string;
};

export type TaxLine = {
  label: string;
  rate: string;
  amount: string;
};

export type TimelineItem = {
  label: string;
  date: string;
  status: "done" | "active" | "upcoming";
};

export type Operation = {
  title: string;
  subtitle: string;
  status: "on-track" | "risk" | "hold";
  eta: string;
};

export type QuoteData = {
  id: string;
  productName: string;
  productImage: string;
  ncmCode: string;
  confidence: number;
  regulations: string[];
  requirements: Requirement[];
  taxes: TaxLine[];
  landedCost: string;
  timeline: TimelineItem[];
  operations: Operation[];
  documents: string[];
  assistantNotes: string[];
};

export type DashboardData = {
  progress: TimelineItem[];
  operations: Operation[];
  savedQuotes: { id: string; label: string; value: string }[];
  quickActions: string[];
};

const quoteData: QuoteData = {
  id: "comex-912",
  productName: "Modulo sensor industrial IoT",
  productImage:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  ncmCode: "9031.80.99",
  confidence: 0.92,
  regulations: ["ANATEL", "ROHS", "EPEAT", "SAFE TRADE"],
  requirements: [
    {
      title: "Licencia de importacion",
      status: "required",
      detail: "Documento emitido por la autoridad nacional."
    },
    {
      title: "Certificado de conformidad",
      status: "in-review",
      detail: "Validacion tecnica por laboratorio acreditado."
    },
    {
      title: "Declaracion de origen",
      status: "approved",
      detail: "Firmada por fabricante y exportador."
    }
  ],
  taxes: [
    { label: "Arancel aduanero", rate: "14%", amount: "USD 2,310" },
    { label: "IVA importacion", rate: "18%", amount: "USD 2,970" },
    { label: "Tasa portuaria", rate: "2.4%", amount: "USD 390" },
    { label: "Seguro internacional", rate: "1.2%", amount: "USD 190" }
  ],
  landedCost: "USD 19,740",
  timeline: [
    { label: "Booking confirmado", date: "16 Ene", status: "done" },
    { label: "Carga en origen", date: "18 Ene", status: "done" },
    { label: "Salida del puerto", date: "19 Ene", status: "active" },
    { label: "Arribo destino", date: "02 Feb", status: "upcoming" },
    { label: "Despacho aduanero", date: "05 Feb", status: "upcoming" }
  ],
  operations: [
    {
      title: "Despacho aduanero",
      subtitle: "Canal verde solicitado",
      status: "on-track",
      eta: "05 Feb"
    },
    {
      title: "Inspeccion documental",
      subtitle: "Pendiente de factura final",
      status: "risk",
      eta: "07 Feb"
    },
    {
      title: "Liberacion terrestre",
      subtitle: "Coordinar transportista",
      status: "hold",
      eta: "10 Feb"
    }
  ],
  documents: [
    "Factura comercial v3",
    "Packing list",
    "Certificado de origen",
    "Poliza de seguro"
  ],
  assistantNotes: [
    "Analice la regulacion ANATEL: requiere homologacion local.",
    "Tarifa aduanera optimizada por acuerdo Mercosur.",
    "Sugiero cotizar transporte terrestre premium para reducir demoras."
  ]
};

const dashboardData: DashboardData = {
  progress: quoteData.timeline,
  operations: quoteData.operations,
  savedQuotes: [
    { id: "comex-912", label: "Modulo sensor IoT", value: "USD 19,740" },
    { id: "comex-905", label: "Panel solar 400W", value: "USD 24,120" },
    { id: "comex-887", label: "Motores lineales", value: "USD 31,560" }
  ],
  quickActions: [
    "Nueva cotizacion",
    "Actualizar HS/NCM",
    "Solicitar verificacion",
    "Abrir ticket operativo"
  ]
};

export async function fetchQuoteMock(id: string): Promise<QuoteData> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return { ...quoteData, id };
}

export async function fetchDashboardMock(): Promise<DashboardData> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return dashboardData;
}
