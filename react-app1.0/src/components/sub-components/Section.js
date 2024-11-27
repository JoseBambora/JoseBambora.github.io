import '../../style/sub-components/Section.css'

export const Section = ({ title, from, to, children, img, imgAlt }) => (
    <div className="card">
        <div className="card-title">
            <section className="section-header">
                {img && <img className='section-img' src={img} alt={imgAlt}/>}
                <h4 className='section-name'>{title}</h4>
                {from && to && <h4 className="section-period">{from} - {to} </h4>}
            </section>
        </div>
        <div className="small-desc">
            {children}
        </div>
    </div>
)