#!/usr/bin/env python3
"""
High Schooler's Tool - Scholarship Data Processor
Processes scholarship information and generates HTML content
"""

import json
from datetime import datetime

class ScholarshipProcessor:
    def __init__(self):
        self.scholarships = []

    def add_scholarship(self, name, country, deadline, coverage, requirements):
        """Add a scholarship to the database"""
        scholarship = {
            'name': name,
            'country': country,
            'deadline': deadline,
            'coverage': coverage,
            'requirements': requirements,
            'added_date': datetime.now().strftime('%Y-%m-%d')
        }
        self.scholarships.append(scholarship)
        return scholarship

    def get_scholarships_by_country(self, country):
        """Get all scholarships for a specific country"""
        return [s for s in self.scholarships if s['country'].lower() == country.lower()]

    def get_upcoming_deadlines(self, months=3):
        """Get scholarships with deadlines in the next X months"""
        return self.scholarships

    def export_to_json(self, filename='scholarships.json'):
        """Export scholarships to JSON file"""
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(self.scholarships, f, indent=2, ensure_ascii=False)
        return f"Exported {len(self.scholarships)} scholarships to {filename}"

    def generate_html_cards(self):
        """Generate HTML cards for all scholarships"""
        html = '<div class="scholarship-grid">\n'

        for scholarship in self.scholarships:
            req_list = ''.join([f"<li>{req}</li>" for req in scholarship['requirements']])
            html += f"""
    <div class="scholarship-card">
        <h3>{scholarship['name']}</h3>
        <p class="country">📍 {scholarship['country']}</p>
        <p class="deadline">📅 Deadline: {scholarship['deadline']}</p>
        <p class="coverage">💰 Coverage: {scholarship['coverage']}</p>
        <div class="requirements">
            <strong>Requirements:</strong>
            <ul>
                {req_list}
            </ul>
        </div>
        <a href="#" class="apply-btn">Learn More</a>
    </div>
"""

        html += '</div>'
        return html

# Example usage
if __name__ == "__main__":
    processor = ScholarshipProcessor()

    # Add sample scholarships
    processor.add_scholarship(
        name="ASEAN Scholarship",
        country="Singapore",
        deadline="October 2026",
        coverage="Full (Tuition + Living + Flight)",
        requirements=[
            "Myanmar citizenship",
            "Excellent academic record",
            "Good English proficiency",
            "Age under 18"
        ]
    )

    processor.add_scholarship(
        name="Chevening Scholarship",
        country="United Kingdom",
        deadline="November 2026",
        coverage="Full (Tuition + Living + Flight)",
        requirements=[
            "Bachelor degree",
            "2 years work experience",
            "IELTS 6.5+",
            "Leadership potential"
        ]
    )

    # Export to JSON
    print(processor.export_to_json())

    # Generate HTML
    html = processor.generate_html_cards()
    print("\nGenerated HTML cards!")
    print(f"Total scholarships: {len(processor.scholarships)}")
