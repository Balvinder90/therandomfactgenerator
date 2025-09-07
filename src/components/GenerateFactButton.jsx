function GenerateFactButton({ onClick }) {
  return (
    <button className="new-fact" onClick={onClick}>
      New Fact
    </button>
  );
}

export default GenerateFactButton;
