import { Component, OnInit } from '@angular/core';
import { Survey, Question, Section } from '../../models/poll.model';
import { SurveysService, SectionsService, QuestionsService } from '../../services/poll.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-poll',
  templateUrl: './single-poll.component.html',
  styleUrl: './single-poll.component.scss'
})
export class SingleSurveyComponent implements OnInit {

  survey!: Survey;
  section!: Section;
  question!: Question;
  questions!: Question[]

  constructor(private surveysService: SurveysService, //private questionsSercice: QuestionsService, //private sectionsService: SectionsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const surveyId = +this.route.snapshot.params['id'];
    this.survey = this.surveysService.getSurveyById(surveyId);
    //this.questions = this.questionsSercice.questions;
    console.log("test02")
    //this.question = this.questionsSercice.getQuestionById(surveyId);
    //this.section = this.sectionsService.getSectionById(surveyId);
  }
}
