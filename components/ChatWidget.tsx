import React from 'react';

const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511976168339?text=Olá%20Felipe%2C%20tudo%20bem%3F%0APara%20qual%20data%20possui%20disponibilidade%20de%20agendamento%3F"
      style={{
        position: 'fixed',
        width: '60px',
        height: '60px',
        bottom: '40px',
        right: '40px',
        backgroundColor: '#25d366',
        color: '#FFF',
        borderRadius: '50px',
        textAlign: 'center',
        fontSize: '30px',
        boxShadow: '1px 1px 2px #888',
        zIndex: 1000
      }}
      target="_blank"
      rel="noopener noreferrer"
      id="btnWhatsApp"
    >
      <i
        style={{ marginTop: '16px' }}
        className="fab fa-whatsapp"
      />
    </a>
  );
};

export default WhatsAppFloat;