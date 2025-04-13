import './index.scss'


export default function CardLocation({posto}){
    return(
    <main>
        <div className="box">
            <div className="posto-card">
                    <h3>{posto.name}</h3>

                    {posto.photo && (
                        <img src={posto.photo} alt={posto.name} style={{ maxWidth: '100px', borderRadius: '8px' }} />
                    )}

                    <p><strong>Endereço:</strong> {posto.formatted_address}</p>

                    {posto.phone_number && <p><strong>Telefone:</strong> {posto.phone_number}</p>}

                    {posto.rating && (
                        <p><strong>Avaliação:</strong> {posto.rating} ⭐ ({posto.review_count} review{posto.review_count > 1 ? 's' : ''})</p>
                    )}

                    <p><strong>Conectores:</strong></p>
                    <ul>
                        {posto.connectors.map((conector, idx) => (
                        <li key={idx}>
                            {conector.type} • {conector.kw} kW • {conector.speed} • {conector.available}/{conector.total} disponíveis
                        </li>
                        ))}
                    </ul>

                    {posto.website && (
                        <p><a href={posto.website} target="_blank" rel="noopener noreferrer">🌐 Site</a></p>
                    )}

                    {posto.place_link && (
                        <p><a href={posto.place_link} target="_blank" rel="noopener noreferrer">📍 Ver no Google Maps</a></p>
                    )}

                    <hr style={{ margin: '20px 0' }} />
                
            </div>
        </div>
    </main>
    ) 
}