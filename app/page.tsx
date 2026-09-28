export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1020",
        color: "white",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "700px" }}>
        <div
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Hostio
        </div>

        <p
          style={{
            color: "#38bdf8",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          FREE WEB HOSTING
        </p>

        <h1
          style={{
            fontSize: "56px",
            lineHeight: "1.1",
            margin: "20px 0",
          }}
        >
          Apni website
          <br />
          Hostio par host karein.
        </h1>

        <p
          style={{
            color: "#aab3c5",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          HTML, CSS aur JavaScript website upload karein
          aur apna free Hostio subdomain hasil karein.
        </p>

        <button
          style={{
            marginTop: "25px",
            padding: "14px 28px",
            border: "none",
            borderRadius: "8px",
            background: "#38bdf8",
            color: "#06111d",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Get Started
        </button>

        <div
          style={{
            marginTop: "50px",
            padding: "18px",
            borderRadius: "10px",
            background: "#111827",
            border: "1px solid #25304a",
          }}
        >
          username.hostio.site
        </div>
      </div>
    </main>
  );
}
