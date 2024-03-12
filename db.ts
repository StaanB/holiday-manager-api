export interface Requisition {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    participants: string | null;
    status: string;
}

export const db: Requisition[] = [
    {
        "id": "1",
        "title": "Beach Vacation",
        "description": "Travel to a paradisiacal beach and relax",
        "date": "07/15/2024",
        "location": "Caribbean Beach",
        "participants": "John and Mary",
        "status": "pending"
    },
    {
        "id": "2",
        "title": "Mountain Retreat",
        "description": "Enjoy the cool mountain climate and go hiking",
        "date": "08/20/2024",
        "location": "Rocky Mountains",
        "participants": "Peter and Anne",
        "status": "accepted"
    },
    {
        "id": "3",
        "title": "Cultural Holidays",
        "description": "Explore museums and historical sites",
        "date": "09/10/2024",
        "location": "Historical City",
        "participants": "Charles and Marian",
        "status": "rejected"
    },
    {
        "id": "4",
        "title": "Adventure Holidays",
        "description": "Practice extreme sports and explore new landscapes",
        "date": "10/05/2024",
        "location": "Adventure Park",
        "participants": "Joseph",
        "status": "pending"
    },
    {
        "id": "5",
        "title": "Gastronomic Holidays",
        "description": "Experience local cuisine from different regions",
        "date": "11/15/2024",
        "location": "Food Capital",
        "participants": "Fernando, Frank and Louise",
        "status": "accepted"
    },
    {
        "id": "6",
        "title": "Relaxation Retreat",
        "description": "Stay at a spa and enjoy relaxing treatments",
        "date": "12/01/2024",
        "location": "Relaxation Resort",
        "participants": null,
        "status": "rejected"
    },
    {
        "id": "7",
        "title": "Volunteering Holidays",
        "description": "Participate in social projects and help needy communities",
        "date": "01/20/2025",
        "location": "Volunteering Center",
        "participants": "Paul",
        "status": "pending"
    },
    {
        "id": "8",
        "title": "Family Vacation",
        "description": "Travel with the family to strengthen bonds",
        "date": "02/10/2025",
        "location": "Family Resort",
        "participants": "Silva Family",
        "status": "accepted"
    },
    {
        "id": "9",
        "title": "Sports Holidays",
        "description": "Practice various sports and participate in competitions",
        "date": "03/15/2025",
        "location": "Sports Center",
        "participants": null,
        "status": "rejected"
    },
    {
        "id": "10",
        "title": "Study Holidays",
        "description": "Participate in courses and workshops to acquire knowledge",
        "date": "04/05/2025",
        "location": "Study Center",
        "participants": "Luke and Carol",
        "status": "pending"
    },
    {
        "id": "11",
        "title": "Ecotourism Holidays",
        "description": "Explore nature and learn about various ecosystems",
        "date": "05/20/2025",
        "location": "Eco Park",
        "participants": "Julia, Rafael, Monica, Juarez",
        "status": "accepted"
    },
    {
        "id": "12",
        "title": "Celebration Holidays",
        "description": "Celebrate special occasions in a unique way",
        "date": "06/10/2025",
        "location": "Celebration Resort",
        "participants": "Sophie",
        "status": "rejected"
    },
    {
        "id": "13",
        "title": "Wildlife Holidays",
        "description": "Discover wildlife and experience nature up close",
        "date": "07/25/2025",
        "location": "Wildlife Reserve",
        "participants": "Will",
        "status": "pending"
    },
    {
        "id": "14",
        "title": "Ski Vacation",
        "description": "Hit the slopes and enjoy winter sports",
        "date": "08/15/2025",
        "location": "Ski Resort",
        "participants": "Olivia and David",
        "status": "accepted"
    },
    {
        "id": "15",
        "title": "Road Trip",
        "description": "Embark on a road trip adventure",
        "date": "09/30/2025",
        "location": "Open Road",
        "participants": "Ryan",
        "status": "rejected"
    }
];
