import Container from "./Container";

function App() {
  return (
    <Container title={<h1 className="py-3">La Mia Applicazione</h1>}>
      <h2 className="py-4 text-blue-600">Ciao a tutti</h2>
      <p className="text-blue-600">Questa è la mia applicazione</p>
    </Container>
  );
}

export default App;
