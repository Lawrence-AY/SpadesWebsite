const services = [
  {
    title: 'Specialised Tools & Material Sourcing',
    text: "We manage the sourcing of tools, equipment, and materials on our clients' behalf, working from the exact technical specifications they provide. Every request is run through a cost analysis matrix that benchmarks quality, lead time, and price across multiple vendors, so clients consistently receive high-quality goods at the most competitive rate the market allows. Beyond sourcing, we can act as a purchasing agent — issuing purchase orders, negotiating vendor terms, and managing supplier relationships — which shields our clients from the procurement laws, licensing requirements, and contractual complexities that come with buying directly in an unfamiliar market.",
    image: '/image.png',
  },
  {
    title: 'Consolidation',
    text: 'Our Grade A warehouse facility at Katko Complex, G30, sits within easy reach of both the SGR Nairobi Terminus and Jomo Kenyatta International Airport, giving us fast, reliable access to goods arriving by rail, road, or air. This location lets us collect shipments from multiple vendors and bring them under one roof, where we consolidate tools and materials from different suppliers into a single, well-organized load ready for bulk haulage to the project site. Consolidating at this stage reduces the number of individual deliveries a site has to receive, manage, and inspect — cutting down on delays, paperwork, and handling costs before goods ever leave our facility.',
    image: '/image2.png',
  },
  {
    title: 'Haulage',
    text: 'Our haulage service covers the movement of consolidated goods from our warehouse to the project site, and forms the connective piece between sourcing and on-site delivery. By breaking bulk shipments down and re-aggregating them into optimized loads, we increase transport efficiency and reduce the number of trips required. This approach eases stock management at the project site — materials arrive organized and in the sequence the site needs them — and lowers overall shipping costs compared to fragmented, vendor-by-vendor deliveries.',
    image: '/image3.png',
  },
  {
    title: 'Labour Sourcing & Payroll Management',
    text: 'We manage the full employment lifecycle for both local and foreign personnel, from initial recruitment through contract signing, day-to-day administration, and eventual termination. This includes drafting and enforcing employee policies, managing labor timesheets, and arranging the insurance coverage required for a cross-border workforce — including Defense Base Act (DBA) insurance and Work Injury Benefits Act (WIBA) cover. For foreign nationals, we handle work permit applications from start to finish, and we run payroll end-to-end, including the calculation and timely payment of statutory dues. Our tailored approach means clients can deploy a diverse, international workforce without building out their own in-country HR and payroll infrastructure.',
    image: '/image.png',
  },
  {
    title: 'Regulatory Compliance',
    text: 'We translate and adapt each client\'s existing corporate policies and procedures into comprehensive, locally compliant policy documents and management handbooks — ensuring internal standards hold up against local law rather than conflicting with it. We continuously monitor and ensure compliance with all applicable governmental laws, rules, and regulations, including tax obligations, labor law, occupational health and safety standards, data protection requirements, and environmental regulations. This ongoing oversight means compliance risk is identified and addressed proactively, rather than surfacing as a problem after the fact.',
    image: '/image5.png',
  },
];

export default function Services() {
  return (
    <section className="services-page">

      {/* Page heading */}
      <div className="services-title">
        <h1>Our Services</h1>
      </div>

      {/* Services */}
      <div className="services-list">

        {services.map((service, index) => {
          const imageOnLeft = index % 2 === 1;

          return (
            <article
              className={`service-row ${
                imageOnLeft ? 'image-left' : 'image-right'
              }`}
              key={service.title}
            >

              {/* Text */}
              <div className="service-copy">

                <div className="service-icon">
                  <span></span>
                </div>

                <h2>{service.title}</h2>

                <p>{service.text}</p>

              </div>

              {/* Image */}
              <div className="service-image">
                <img
                  src={service.image}
                  alt={service.title}
                />
              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
}