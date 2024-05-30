import { Injectable } from '@angular/core';
import { Survey, Question, Section } from '../models/poll.model'

@Injectable({
  providedIn: 'root'
})
export class SurveysService {
  surveys: Survey[] = [
    {
      id: 1,
      title: 'Choix d\'un lieu pour la visite de la prochaine brasserie d\'Abbaye',
      descr: 'Choisissez le lieu qui vous convient',
      imgUrl: 'https://beer.be/wp-content/uploads/2021/06/Bavo-620x420.jpg',
      labBtn: 'Lancer le sondage de la visite de brasserie d\'Abbaye Juin 2024'
    },
    {
      id: 2,
      title: 'Pronostics des phases de groupe de l\'EURO de foot 2024',
      descr: 'Pronostiquer les bons résultats des matchs de foot',
      imgUrl: 'https://i.eurosport.com/2014/09/07/1309616-28185444-1600-900.jpg',
      labBtn: 'Lancer le sondage des poules de l\'EURO 2024'
    },
    {
      id: 3,
      title: 'Pronostics des qualifications de l\'EURO de foot 2024',
      descr: 'Pronostiquer le bon classement des qualifications',
      imgUrl: 'https://www.topmercato.com/wp-content/uploads/2021/10/Eden-Hazard-et-Raphael-Varane-match-France-Belgique-2018.jpg',
      labBtn: 'Lancer le sondage des qualification de l\'EURO 2024'
    },
    {
      id: 4,
      title: 'Choix d\'une date pour le futur repas d\'équipe JUIN 2024',
      descr: 'Définir une date pour le lunch d\'équipe de juin 2024',
      imgUrl: 'https://img.luxtimes.lu/public/luxembourg/55lufs-bouneweger-stuff-has-five-set-brunch-menus-but-gets-busy-so-reserve-a-table/alternates/SIXTEEN_NINE_1920/Bouneweger%20Stuff%20has%20five%20set%20brunch%20menus%20but%20gets%20busy%20so%20reserve%20a%20table',
      labBtn: ''
    }
  ]

  getAllSurveys(): Survey[] {
    return this.surveys;
  }

  getSurveyById(surveyId: number): Survey {
    const survey = this.surveys.find(survey => survey.id === surveyId);
    if (!survey) {
      throw new Error('Survey not found!');
    } else {
      return survey;
    }
  }
}
export class SectionsService {
  sections: Section[] = [
    {
      id: 1,
      title: 'Choix d\'un lieu pour la visite de la prochaine brasserie d\'Abbaye'
    },
    {
      id: 2,
      title: 'Pronostics des phases de groupe de l\'EURO de foot 2024'
    },
    {
      id: 3,
      title: 'Pronostics des qualifications de l\'EURO de foot 2024'
    },
    {
      id: 4,
      title: 'Choix d\'une date pour le futur repas d\'équipe JUIN 2024'
    }
  ]

  getAllSections(): Section[] {
    return this.sections;
  }

  getSectionById(sectionId: number): Section {
    console.log("test01")
    const section = this.sections.find(section => section.id === sectionId);
    if (!section) {
      throw new Error('section not found!');
    } else {
      return section;
    }
  }
}

export class QuestionsService {
  questions: Question[] = [
    {
      id: 1,
      title: 'Choix d\'un lieu pour la visite de la prochaine brasserie d\'Abbaye'
    },
    {
      id: 2,
      title: 'Pronostics des phases de groupe de l\'EURO de foot 2024'
    },
    {
      id: 3,
      title: 'Pronostics des qualifications de l\'EURO de foot 2024'
    }
  ]
  getAllQuestions(): Question[] {
    return this.questions;
  }

  getQuestionById(questionId: number): Question {
    const question = this.questions.find(question => question.id === questionId);
    if (!question) {
      throw new Error('section not found!');
    } else {
      return question;
    }
  }
}
