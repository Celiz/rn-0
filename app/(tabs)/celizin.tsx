import React from 'react';
import { ScrollView, StyleSheet, Platform, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CelizinPage() {
  return (
    <ScrollView style={styles.scrollView}>
      <LinearGradient
        colors={['#2c3e50', '#3498db']}
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
    <MaterialCommunityIcons name={icon as keyof typeof MaterialCommunityIcons.glyphMap} size={24} color="#3498db" />
    <ThemedText style={styles.sectionTitle}>{title}</ThemedText>
  </ThemedView>
);

interface ContactItemProps {
  icon: string;
  text: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text }) => (
  <ThemedView style={styles.contactItem}>
    <MaterialCommunityIcons name={icon as keyof typeof MaterialCommunityIcons.glyphMap} size={20} color="#3498db" />
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
      <View key={index} style={styles.dutyItem}>
        <ThemedText style={styles.dutyBullet}>•</ThemedText>
        <ThemedText style={styles.dutyText}>{duty}</ThemedText>
      </View>
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
    backgroundColor: '#f5f5f5',
  },
  headerGradient: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 220,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    marginTop: 5,
  },
  section: {
    marginBottom: 25,
    borderRadius: 15,
    padding: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#2c3e50',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#34495e',
  },
  jobItem: {
    marginBottom: 25,
    borderLeftWidth: 3,
    borderLeftColor: '#3498db',
    paddingLeft: 15,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  jobCompany: {
    fontSize: 18,
    fontWeight: '500',
    color: '#34495e',
    marginBottom: 3,
  },
  jobDate: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#7f8c8d',
    marginBottom: 10,
  },
  dutyItem: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'flex-start',
  },
  dutyBullet: {
    marginRight: 10,
    color: '#3498db',
    fontSize: 16,
  },
  dutyText: {
    flex: 1,
    fontSize: 16,
    color: '#34495e',
  },
  skillItem: {
    marginBottom: 15,
  },
  skillTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  skillText: {
    fontSize: 16,
    color: '#34495e',
  },
  educationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  educationSchool: {
    fontSize: 18,
    color: '#34495e',
    marginBottom: 3,
  },
  educationDate: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#7f8c8d',
  },
});