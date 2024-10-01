import React from 'react';
import { ScrollView, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CelizinPage() {
  return (
    <ScrollView style={styles.scrollView}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.headerGradient}
      >
        <ThemedText style={styles.title}>Celiz Ramos Matías Nicolás</ThemedText>
        <ThemedText style={styles.subtitle}>Full Stack Developer</ThemedText>
      </LinearGradient>
      
      <ThemedView style={styles.container}>
        <ThemedView style={styles.section}>
          <SectionTitle icon="account-box" title="Contacto" />
          <ContactItem icon="phone" text="+52 223 542 1371" />
          <ContactItem icon="email" text="maticelizramos@gmail.com" />
          <ContactItem icon="linkedin" text="linkedin.com/in/celizm" />
        </ThemedView>
        
        <ThemedView style={styles.section}>
          <SectionTitle icon="briefcase" title="Experiencia Laboral" />
          
          <JobItem 
            title="Junior Full Stack Developer"
            company="Grucar Remolques"
            date="Junio 2024 - Septiembre 2024"
            duties={[
              "Desarrollo de sistema interno para empresa de grúas",
              "Implementación de endpoints con Next.js y TypeScript",
              "Diseño de interfaz con Tailwind CSS"
            ]}
          />
          
          <JobItem 
            title="Junior Full Stack Developer"
            company="FinGuru"
            date="Marzo 2024 - Mayo 2024"
            duties={[
              "Implementación de nuevas características",
              "Tecnologías: React, TypeScript, Strapi, SCSS"
            ]}
          />
          
          <JobItem 
            title="Junior Frontend Developer"
            company="Tranqui"
            date="Octubre 2022 - Presente"
            duties={[
              "Creación de app mobile y mantenimiento",
              "Tecnologías: React, TypeScript, Ionic, SCSS"
            ]}
          />
        </ThemedView>
        
        <ThemedView style={styles.section}>
          <SectionTitle icon="laptop" title="Habilidades Técnicas" />
          <SkillItem title="Lenguajes" skills={["JavaScript", "TypeScript", "C++", "Java", "Python"]} />
          <SkillItem title="Bases de Datos" skills={["MySQL", "PostgreSQL"]} />
          <SkillItem title="Control de Versiones" skills={["Git", "Github"]} />
        </ThemedView>
        
        <ThemedView style={styles.section}>
          <SectionTitle icon="school" title="Educación" />
          <ThemedText style={styles.educationTitle}>Técnico en Informática Personal y Profesional</ThemedText>
          <ThemedText style={styles.educationSchool}>Escuela de Educación Secundaria Técnica N°5 "Amancio Williams"</ThemedText>
          <ThemedText style={styles.educationDate}>Mar 2018 - Dec 2024</ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

interface SectionTitleProps {
  icon: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon, title }) => (
  <ThemedView style={styles.sectionTitleContainer}>
    <MaterialCommunityIcons size={24} color="#4c669f" />
    <ThemedText style={styles.sectionTitle}>{title}</ThemedText>
  </ThemedView>
);

interface ContactItemProps {
  icon: string;
  text: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text }) => (
  <ThemedView style={styles.contactItem}>
    <MaterialCommunityIcons size={20} color="#4c669f" />
    <ThemedText style={styles.contactText}>{text}</ThemedText>
  </ThemedView>
);

interface JobItemProps {
  title: string;
  company: string;
  date: string;
  duties: string[];
}

const JobItem: React.FC<JobItemProps> = ({ title, company, date, duties }) => (
  <ThemedView style={styles.jobItem}>
    <ThemedText style={styles.jobTitle}>{title}</ThemedText>
    <ThemedText style={styles.jobCompany}>{company}</ThemedText>
    <ThemedText style={styles.jobDate}>{date}</ThemedText>
    {duties.map((duty, index) => (
      <ThemedView key={index} style={styles.dutyItem}>
        <ThemedText style={styles.dutyBullet}>•</ThemedText>
        <ThemedText style={styles.dutyText}>{duty}</ThemedText>
      </ThemedView>
    ))}
  </ThemedView>
);

interface SkillItemProps {
  title: string;
  skills: string[];
}

const SkillItem: React.FC<SkillItemProps> = ({ title, skills }) => (
  <ThemedView style={styles.skillItem}>
    <ThemedText style={styles.skillTitle}>{title}:</ThemedText>
    <ThemedText style={styles.skillText}>{skills.join(', ')}</ThemedText>
  </ThemedView>
);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerGradient: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  },
  section: {
    marginBottom: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#4c669f',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
  },
  jobItem: {
    marginBottom: 20,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4c669f',
  },
  jobCompany: {
    fontSize: 16,
    fontWeight: '500',
  },
  jobDate: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 5,
  },
  dutyItem: {
    flexDirection: 'row',
    marginTop: 5,
  },
  dutyBullet: {
    marginRight: 5,
  },
  dutyText: {
    flex: 1,
  },
  skillItem: {
    marginBottom: 10,
  },
  skillTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  skillText: {
    fontSize: 16,
  },
  educationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4c669f',
  },
  educationSchool: {
    fontSize: 16,
    marginTop: 5,
  },
  educationDate: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666',
    marginTop: 5,
  },
});