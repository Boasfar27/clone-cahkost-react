import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const HistoryPembayaran = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  
  const tableRows = [
    ["INV123456", "01 Januari 2023", "Januari 2023", "Rp 800.000", "Transfer Bank", "Kost Cahaya Indah"],
    ["INV123457", "05 Februari 2023", "Februari 2023", "Rp 850.000", "Transfer Bank", "Kost Cahaya Indah"],
    ["INV123458", "01 Maret 2023", "Maret 2023", "Rp 800.000", "Transfer Bank", "Kost Cahaya Indah"],
    ["INV123459", "01 April 2023", "April 2023", "Rp 850.000", "Transfer Bank", "Kost Cahaya Indah"],
    ["INV123460", "01 Mei 2023", "Mei 2023", "Rp 800.000", "Transfer Bank", "Kost Cahaya Indah"],
    ["INV123461", "01 Juni 2023", "Juni 2023", "Rp 850.000", "Transfer Bank", "Kost Cahaya Indah"],
    ["INV123462", "01 Juli 2023", "Juli 2023", "Rp 800.000", "Transfer Bank", "Kost Cahaya Indah"],
    ["INV123463", "01 Agustus 2023", "Agustus 2023", "Rp 850.000", "Transfer Bank", "Kost Cahaya Indah"],
    ["INV123464", "01 September 2023", "September 2023", "Rp 800.000", "Transfer Bank", "Kost Cahaya Indah"],
    ["INV123465", "01 Oktober 2023", "Oktober 2023", "Rp 850.000", "Transfer Bank", "Kost Cahaya Indah"],
  ];

  const totalPages = Math.ceil(tableRows.length / rowsPerPage);

  const displayRows = () => {
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return tableRows.slice(start, end);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("History Pembayaran Sewa Kost", 70, 50);

    doc.autoTable({
      startY: 60,
      head: [["Nomor Transaksi", "Tanggal Pembayaran", "Bulan yang Dibayar", "Nominal", "Metode Pembayaran", "Nama Kost"]],
      body: tableRows,
      theme: "grid",
      headStyles: { fillColor: [63, 81, 181], textColor: [255, 255, 255], fontStyle: "bold", halign: "center" },
      bodyStyles: { textColor: [0, 0, 0] },
      alternateRowStyles: { fillColor: [240, 240, 240] },
      styles: { lineColor: [0, 0, 0], lineWidth: 0.5 },
      margin: { top: 60 },
    });

    doc.save("history_pembayaran.pdf");
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-700 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          History Pembayaran Sewa
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-yellow-400 hover:to-yellow-600 transition-colors duration-300">
            CahKost
          </span>
        </h1>

        {/* Filter Tahun and Export PDF buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-auto">
            <label htmlFor="filter-year" className="block text-sm font-medium text-gray-700 mb-1">
              Urutkan
            </label>
            <select id="filter-year" className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option value="terlama">Terlama</option>
              <option value="terbaru">Terbaru</option>
            </select>
          </div>
          <button onClick={exportPDF} className="w-full md:w-auto bg-red-500 hover:bg-red-900 text-white text-sm py-2 px-4 rounded transition duration-300 ease-in-out">
            Export PDF
          </button>
        </div>

        {/* Tabel Riwayat Pembayaran */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Nomor Transaksi</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tanggal Pembayaran</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Bulan yang Dibayar</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Nominal</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Metode Pembayaran</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Nama Kost</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Nota</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {displayRows().map((row, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                  {row.map((col, colIndex) => (
                    <td key={colIndex} className="px-4 py-2">{col}</td>
                  ))}
                  <td className="px-4 py-2">
                    <button className="text-blue-500 hover:underline">Unduh</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Kembali ke <Link to="/" className="font-medium text-indigo-900 hover:text-indigo-200">Beranda</Link>
        </p>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevPage}
            className={`bg-gray-200 text-gray-700 px-4 py-2 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Previous
          </button>
          <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
          <button
            onClick={nextPage}
            className={`bg-gray-200 text-gray-700 px-4 py-2 rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Next
          </button>
        </div>

        <div id="pdfSuccessMessage" className="hidden text-center text-green-500 font-bold mt-4">
          File PDF berhasil diunduh!
        </div>
      </div>
    </div>
  );
};

export default HistoryPembayaran;
