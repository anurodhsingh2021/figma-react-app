import './ClientsSection.scss';

interface Client {
  name: string;
  logo: string;
}

interface Props {
  clients: Client[];
}

const ClientsSection = ({ clients }: Props) => {
  return (
    <section className="clients">
      <h2>Clients</h2>
      <p>
        We value a great working relationship with our clients above all else.
        It’s why they often come to our parties.
      </p>

      <div className="clients_grid">
        {clients.map((client) => (
          <img
            key={client.name}
            src={client.logo}
            alt={client.name}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
