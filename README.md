# HealthChain - Blockchain-Powered Medical Records System

A secure, decentralized medical records management system built with React and blockchain technology. HealthChain empowers patients to own and control their medical data while enabling seamless, secure sharing with healthcare providers.

## 🌐 Live Demo

<div align="center">
  
**🚀 [Try HealthChain Live](https://helthcare-management.vercel.app/)**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-brightgreen?style=for-the-badge&logo=vercel)](https://helthcare-management.vercel.app/)

</div>

> **Demo Credentials:**
>
> - Patient Login: Use the patient dashboard to explore medical records
> - Doctor Login: Access the doctor dashboard for patient management
> - Features: View blockchain transactions, IPFS integration, and secure data sharing

## 🌟 Features

### For Patients

- **Secure Medical Records Storage** - Your data is encrypted and stored on the blockchain
- **Complete Data Ownership** - You control who accesses your medical information
- **Easy Record Sharing** - Grant temporary or permanent access to healthcare providers
- **Comprehensive Medical History** - View all your medical records in one place
- **Real-time Notifications** - Get notified when someone accesses your data
- **Emergency Access** - QR code for emergency medical situations

### For Doctors

- **Patient Management** - Manage your patients and their medical records
- **Prescription Writing** - Create and issue digital prescriptions
- **Test Results Upload** - Upload lab results and diagnostic reports
- **Global Patient View** - Access patient records across the blockchain network
- **Hospital Node Status** - Monitor blockchain network health
- **IPFS File Management** - Attach files to patient records using IPFS

### Security Features

- **Blockchain Technology** - Immutable record keeping on Ethereum
- **IPFS Integration** - Decentralized file storage
- **Smart Contracts** - Automated access control and permissions
- **End-to-End Encryption** - All data is encrypted before storage
- **Activity Logging** - Complete audit trail of all access

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Modern web browser

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/blockchain-medical.git
cd blockchain-medical
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0, React Router DOM
- **Styling**: Tailwind CSS 4.1.7, Animate.css
- **Build Tool**: Vite
- **Notifications**: React Toastify
- **Icons**: Font Awesome
- **Blockchain**: Ethereum (planned integration)
- **File Storage**: IPFS (planned integration)

## 📁 Project Structure

```
blockchain-medical/
├── public/
│   ├── logo.svg
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Cta.jsx
│   │   ├── Doctor.jsx
│   │   ├── DoctorDashboard.jsx
│   │   ├── Patient.jsx
│   │   ├── PatientDashboard.jsx
│   │   └── UI/
│   ├── pages/
│   │   ├── ActivityLog.jsx
│   │   ├── Dashboard.jsx
│   │   ├── DashboardHome.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Management.jsx
│   │   ├── NewDashboard.jsx
│   │   ├── NewDoctorDashboard.jsx
│   │   ├── NewpatientDashboard.jsx
│   │   ├── Notifications.jsx
│   │   ├── Profile.jsx
│   │   ├── Records.jsx
│   │   ├── Prescriptions.jsx
│   │   └── UploadReport.jsx
│   ├── utils/
│   │   ├── Logout.jsx
│   │   └── ProtectedRoute.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_ETHEREUM_NETWORK=mainnet
VITE_IPFS_GATEWAY=https://ipfs.io/ipfs/
VITE_API_BASE_URL=http://localhost:3001
```

### Vite Configuration

The project uses Vite with React and Tailwind CSS plugins. Configuration is available in [`vite.config.js`](vite.config.js).

## 🏥 User Roles

### Patient Dashboard Features

- View medical records and prescriptions
- Upload new medical reports
- Manage data sharing permissions
- Track access activity
- Emergency QR code access

### Doctor Dashboard Features

- Manage patient list
- Write and issue prescriptions
- Upload test results and reports
- Access global patient records
- Monitor hospital network status

## 🔐 Security & Privacy

- **Data Encryption**: All medical data is encrypted before storage
- **Blockchain Verification**: Records are cryptographically signed and verified
- **Access Control**: Smart contracts manage data access permissions
- **Activity Monitoring**: Complete audit trail of all data access
- **Emergency Access**: Special protocols for emergency medical situations

## 📱 Responsive Design

HealthChain is fully responsive and works seamlessly across:

- Desktop computers
- Tablets
- Mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Create an issue on GitHub
- Email: support@healthchain.io
- Documentation: [docs.healthchain.io](https://docs.healthchain.io)

## 🗺️ Roadmap

- [ ] Smart contract integration
- [ ] IPFS file storage implementation
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Telemedicine integration

## 👥 Team

- **Frontend Development**: React.js with modern hooks
- **Blockchain Integration**: Ethereum smart contracts
- **UI/UX Design**: Tailwind CSS with responsive design
- **Security**: End-to-end encryption and blockchain verification

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Vite](https://vitejs.dev/) - Build tool
- [Font Awesome](https://fontawesome.com/) - Icons
- [Animate.css](https://animate.style/) - Animations

---

**Built with ❤️ for better healthcare data management**
