import '../../style/sub-components/Section.css'

export const Section = ({ title, from, to, children }) => (
    <div class="card">
        <p class="card-title">
            <header className={from && to && "section-header"}>
                <h4 className='section-name'>{title}</h4>
                {from && to && <h4 className="section-period">{from} - {to} </h4>}
            </header>
        </p>
        <div class="small-desc">
            {children}
        </div>
    </div>
)