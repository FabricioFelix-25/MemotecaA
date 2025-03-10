import { Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {


  constructor(
    private service: PensamentoService,
      private router: Router,
      private formBuilder: FormBuilder,
  ){}

  ngOnInit(): void {
    this.fomulario = this.formBuilder.group({
      conteudo: ['Formularioo reativo'],
      autoria:['Angular'],
      modelo:['1']
    });
  }

  criarPensamento() {
    this.service.criar(this.fomulario.value).subscribe(()=> {
      this.router.navigate(['/pensamentos'])
    })
  }

  fomulario!: FormGroup;

  cancelar() {
    this.router.navigate(['/pensamentos'])
  }

}
