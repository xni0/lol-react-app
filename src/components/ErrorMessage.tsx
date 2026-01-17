

export const ErrorMessage = () => {
  return (
    <div id="error" style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>
      <p>Something went wrong with the connection, it's no joke :(</p>
      {/* We use the image from the public folder */}
      <img src="/img/sad-pikachu.gif" alt="Sad Pikachu" />
    </div>
  );
};