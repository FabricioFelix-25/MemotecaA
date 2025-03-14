import { Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      conteudo: [' ', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ])],
      autoria:['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      modelo:['modelo1', [Validators.required]],
    });
  }

  criarPensamento() {

    if(this.fomulario.valid) {
      this.service.criar(this.fomulario.value).subscribe(()=> {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  fomulario!: FormGroup;

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

  habilitarBotao(): String {
    if(this.fomulario.valid) {
      return 'botao';
    }else {
      return 'botao__desabilitado';
    }

  }

}
