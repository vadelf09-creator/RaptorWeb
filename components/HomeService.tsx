"use client";

import { useState } from "react";

const WA_NUMBER = "543804889036";

const VEHICLE_SERVICES: Record<string, string[]> = {
  Auto: [
    "Lavado Tradicional — $15.000",
    "Lavado Detallado — $20.000",
    "Servicio Premium — $60.000",
    "Lavado de Motor — A presupuestar",
    "Guante Blanco — A presupuestar",
  ],
  Camioneta: [
    "Lavado Tradicional — $20.000",
    "Lavado Detallado — $30.000",
    "Servicio Premium — $80.000",
  ],
  Moto: ["Lavado Tradicional — $6.000", "Lavado Detallado — $9.000"],
  Utilitario: [
    "Lavado Tradicional — $20.000",
    "Lavado Detallado — $30.000",
    "Servicio Premium — $40.000",
    "Lavado de Motor — A presupuestar",
    "Guante Blanco — A presupuestar",
  ],
};

type Form = {
  nombre: string;
  telefono: string;
  direccion: string;
  vehiculo: string;
  servicio: string;
  fechaHora: string;
};

export default function HomeService() {
  const [form, setForm] = useState<Form>({
    nombre: "",
    telefono: "",
    direccion: "",
    vehiculo: "",
    servicio: "",
    fechaHora: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "vehiculo" ? { servicio: "" } : {}),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `🚗 *SERVICIO A DOMICILIO — RAPTOR CARWASH*

👤 *Nombre:* ${form.nombre}
📱 *Teléfono:* ${form.telefono}
📍 *Dirección:* ${form.direccion}
🚘 *Vehículo:* ${form.vehiculo}
✨ *Servicio:* ${form.servicio}
📅 *Fecha y hora preferida:* ${form.fechaHora}

¡Hola! Me interesa solicitar el servicio a domicilio.`;

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const inputCls =
    "w-full bg-[#080E12] border border-[rgba(200,146,42,0.2)] hover:border-[rgba(200,146,42,0.35)] focus:border-[rgba(200,146,42,0.6)] focus:outline-none text-[#F5EFD8] placeholder-[#4A6872] font-body font-light text-sm px-4 py-3.5 rounded-xl transition-colors";

  const labelCls =
    "block font-mono text-[10px] font-medium text-[#8AA8B5] uppercase tracking-[0.2em] mb-2";

  return (
    <section id="domicilio" className="py-24 bg-[#0D3B4F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="font-mono text-[#C8922A] text-[10px] tracking-[0.25em] uppercase mb-4">
              Servicio a Domicilio
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-[#F5EFD8] tracking-[0.02em] leading-[0.9] mb-6">
              TE LO
              <br />
              LLEVAMOS
              <br />
              <span className="text-[#C8922A]">A VOS.</span>
            </h2>
            <p className="font-body font-light text-[#8AA8B5] text-base leading-relaxed mb-10 max-w-sm">
              ¿No podés venir al local? No hay problema. Completá el formulario
              y coordinamos día y horario a tu medida.
            </p>

            <div className="space-y-4">
              {[
                { icon: "📍", text: "Cubrimos La Rioja y alrededores" },
                { icon: "📅", text: "Coordinamos el horario que mejor te quede" },
                { icon: "🔧", text: "Mismo nivel de calidad que en el local" },
                { icon: "💳", text: "Efectivo o transferencia" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(200,146,42,0.1)] flex items-center justify-center text-base flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-body font-light text-[#8AA8B5] text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#080E12] border border-[rgba(200,146,42,0.2)] rounded-2xl p-7">
            <h3 className="font-display text-2xl text-[#F5EFD8] tracking-[0.04em] mb-6">
              Solicitá tu turno a domicilio
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Nombre</label>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Teléfono</label>
                  <input
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="Tu número de contacto"
                    required
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label className={labelCls}>Dirección</label>
                <input
                  name="direccion"
                  value={form.direccion}
                  onChange={handleChange}
                  placeholder="Calle, número, barrio"
                  required
                  className={inputCls}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Tipo de vehículo</label>
                  <select
                    name="vehiculo"
                    value={form.vehiculo}
                    onChange={handleChange}
                    required
                    className={inputCls}
                  >
                    <option value="" disabled>
                      Seleccioná
                    </option>
                    {Object.keys(VEHICLE_SERVICES).map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelCls}>Servicio</label>
                  <select
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    required
                    disabled={!form.vehiculo}
                    className={`${inputCls} disabled:opacity-40 disabled:cursor-not-allowed`}
                  >
                    <option value="" disabled>
                      {form.vehiculo
                        ? "Seleccioná un servicio"
                        : "Primero elegí el vehículo"}
                    </option>
                    {(VEHICLE_SERVICES[form.vehiculo] ?? []).map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelCls}>Fecha y hora preferida</label>
                <input
                  name="fechaHora"
                  value={form.fechaHora}
                  onChange={handleChange}
                  placeholder="Ej: Lunes 16 de junio, a las 10hs"
                  required
                  className={inputCls}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#C8922A] hover:bg-[#B8821E] text-[#080E12] font-body font-medium py-4 rounded-xl transition-all duration-200 hover:scale-[1.01] shadow-[0_0_30px_rgba(200,146,42,0.15)] mt-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.558 4.135 1.536 5.872L0 24l6.318-1.508A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.506-5.181-1.389l-.371-.22-3.75.895.908-3.657-.242-.381A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Enviar solicitud por WhatsApp
              </button>

              <p className="font-mono text-[#4A6872] text-[10px] text-center tracking-[0.1em] mt-2">
                Al enviar se abrirá WhatsApp con tu solicitud completa lista
                para enviar.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
