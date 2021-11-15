export default function DashBoard() {
  return (
    <div className="dashboard d-flex flex-column h-100">
      <div className="contents-header col d-flex justify-content-center p-3 border-bottom align-items-center bg-white">
        <h2 className="me-md-auto fw-bold">Dashboard</h2>
        <div>
          0000-00-00 ~ 0000-00-00
        </div>
      </div>

      <div className="contents-wrap col">
        <h2 className="d-none">Dashboard Services</h2>
      </div>
    </div>
  );
}
