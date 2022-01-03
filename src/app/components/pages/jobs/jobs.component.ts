import { Component, OnInit } from '@angular/core';
import { JobDto } from '../../../dtos/jobs/JobDto';
import { JobService } from '../../../services/jobs/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  jobs: JobDto[] = [];

  constructor(private jobService: JobService) {
    this.jobService.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

  ngOnInit(): void {}
}
