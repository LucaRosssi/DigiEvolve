const Stat = ({ icon, label, value }) => (
  <div className='stat'>
    <img src={icon} title={label} alt={label} />
    <span>{value ?? '-'}</span>
  </div>
)

export default Stat