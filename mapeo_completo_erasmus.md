# Mapeo Completo — erasmus-valencia.com
> Extraído por Chromium (Playwright) — 2026-05-19

## DATOS CORPORATIVOS REALES
- **Nombre legal**: Erasmus Life Valencia (CIF: B98890767)
- **Dirección**: Calle Ramón Llull 21 bajo (oficina púrpura), 46021 Valencia
- **Tel/WhatsApp**: +34 634 300 402
- **Horario**: Lun–Vie 10:00–18:00
- **Fundación**: 2007 | **Presidente**: Michael Vivaldi
- **Sedes**: Valencia, Alicante, Murcia, Castellón, Granada, Barcelona, Madrid
- **Soporte viajes**: Home & Trips Services, SL (seguro incluido)
- **Wifi + café gratis** en la oficina para estudiantes

## NAVEGACIÓN PRINCIPAL
DESCUBRE VALENCIA | ACTIVIDADES | VIAJES | FIESTAS | PISOS | CARNET ERASMUS LIFE | FOTOS | VIDEOS | TARJETAS SIM | NECESITO UN TRABAJO | AHORRATE DINERO

### Submenú Descubre Valencia
Historia · Informaciones · Especialidades · Festivales anuales · Transportes · Museos · Albergues Juveniles · Universidades · Escuelas de Idiomas · Región · Meteorología · Tarjeta SIM

## PISOS Y APARTAMENTOS (datos reales del scraping)
Todos con disponibilidad semestral: 1 Feb–30 Jun / 1 Sep–31 Ene

1. **POBLA DE FARNAL - n.43-6** — 4 dorm, amueblado, cocina equipada, zona estudiantes, luminoso y moderno, cerca universidades
2. **JOSE PINTOR MONGRELL - n.7** — 4 dorm, amueblado, A/C, 1 baño, centro Blasco Ibáñez
3. **CARDENAL BENLLOCH - n.74A-11** — 200m², 5 hab, 2 baños, zona Blasco Ibáñez, cerca universidades
4. **JOSE MARIA ORENSE - n.4** — Solo chicas, 150m², gran balcón, 2 baños, cerca UV y UPV
5. **MUSICO MARTIN SOLER - n.5** — Blasco Ibáñez, 15 min andando a la playa
6. **POETA MAS Y ROS - n.105** — Blasco Ibáñez, 15 min playa
7. **BLASCO IBAÑEZ - n.77** — Habitaciones económicas, metro Amistad, cerca universidades

## CARNET ERASMUS LIFE (3 niveles reales)
| Plan | Precio | Beneficios clave |
|------|--------|-----------------|
| Erasmus Life | **Gratis** | Unirse a la asociación |
| VIP | **10 €** | + Descuentos tiendas, Oceanogràfic, Bioparc, discotecas |
| GOLD | **49 €** | + Todo VIP + 10€ descuento viajes largos + 2-5€ en excursiones 1 día + Cancelación con reembolso hasta 24h antes |

Común a todos: acceso listas de fiestas sin gasto de gestión, viajes y excursiones, eventos semanales

## PRECIOS REALES DESCUENTOS / VIAJES (scraping)
- **Aqualandia**: Individual 65€ | 5 personas 60€/p | 8 personas 55€/p
- **Marruecos 9 días**: Individual 489€ | 5p 480€/p | 8p 470€/p
- **Alicante (Castillo y Ciudad)**: Individual 34€ | 5p+ 32€/p | 8p+ 30€/p
- Otras excursiones: 69€, 64€, 33€–45€ (actividades/fiestas)
- Excursiones cortas: 25€–45€ rango

## FORMULARIOS REALES (campos del DOM)
### Guest list fiestas
`prenom` · `nom` · `mail` · `nb_invit` · `reservation` · `trip` · `butlerian` (honeypot)

### Inscripción/reserva viaje
`mail` · `pass` · `nom` · `civ` (civility) · `prenom` · `tel` · `envoi`

### Recordatorio evento
`day_before` (1-5 días) · `mail_news` · `want_news` · `trip`

### Contacto general
`email_expediteur` · `nom_expediteur` · `tel_expediteur` · `ville_expediteur` · `wha_expediteur` · `message` · `g-recaptcha-response`

### Newsletter
`email_news` · `g-recaptcha-response` · `butlerian` (honeypot anti-spam)

## PROBLEMAS TÉCNICOS DETECTADOS
- Carga: ~7s (DOM) — objetivo nuevo: <1s (LCP)
- Sin H1 en homepage
- Login obligatorio para ver pisos → barrera de conversión crítica
- CMS legacy (.htm), sin SEO semántico
- Sin Open Graph / Twitter Cards
- Sin iconos sociales en markup
