import { Link } from 'react-router-dom';
import ROUTES from '../../../constants/routes';

const dataAutomationSections = [
    {
        id: 'introduction',
        label: 'Introduction',
        title: 'Data Automation Overview',
        content: (
            <div>
                <p>
                    In today's data-driven world, effective data management and automation are essential to streamline business processes. Our Data Automation service is designed to consolidate your data through robust data warehousing and ETL processes.
                </p>
                <p>
                    Leveraging tools like Apache Airflow, we build reliable workflows that ensure your data is collected, processed, and made available for analysis efficiently.
                </p>
            </div>
        ),
    },
    {
        id: 'data-etl',
        label: 'ETL & Warehousing',
        title: 'Data Warehousing & ETL',
        content: (
            <div>
                <p>
                    We build comprehensive data lakes and warehouses to centralize your data from multiple sources. Our ETL (Extract, Transform, Load) processes ensure that data is cleaned, structured, and ready for analysis.
                </p>
                <p>
                    By using Apache Airflow, we automate the scheduling and monitoring of data pipelines, reducing manual efforts and ensuring data integrity.
                </p>
            </div>
        ),
    },
    {
        id: 'dashboard',
        label: 'Dashboard Service',
        title: 'Dashboard & Reporting',
        content: (
            <div>
                <p>
                    To help you gain actionable insights, we offer a dashboard service that visualizes the data stored in your data lake or warehouse. Our reporting tools allow you to monitor key performance indicators and track trends over time.
                </p>
                <p>
                    <Link to={ROUTES.SERVICES.DATA_VISUALIZATION}>Click here</Link> to access our reporting solutions.
                </p>
            </div>
        ),
    },
    {
        id: 'data-sources',
        label: 'Data Sources',
        title: 'Data Sources Integration',
        content: (
            <div>
                <p>
                    We integrate data from a wide variety of sources to ensure a holistic view of your business. Our services cover:
                </p>
                <ul>
                    <li>SQL Databases (e.g., MySQL, PostgreSQL, Microsoft SQL Server)</li>
                    <li>NoSQL Databases (e.g., MongoDB, Cassandra)</li>
                    <li>Cloud-based databases (e.g., AWS RDS, Google Cloud SQL, Azure SQL)</li>
                    <li>Data from Google Spreadsheets, Excel files, and even emails</li>
                </ul>
                <p>
                    This integration enables seamless data consolidation and prepares your data for robust analysis.
                </p>
            </div>
        ),
    },
    {
        id: 'document-processing',
        label: 'Document Processing',
        title: 'Automated Document Processing',
        content: (
            <div>
                <p>
                    In addition to data integration, we provide solutions for automating the reading and verification of documents. Our system can extract information from PDFs, scanned images, and other document formats, reducing manual effort and increasing accuracy.
                </p>
            </div>
        ),
    },
];

export default dataAutomationSections;
