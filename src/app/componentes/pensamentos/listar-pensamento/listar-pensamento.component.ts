import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) {}
  paginaAtual: number  =1;

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos)=>{
      this.listaPensamentos = listaPensamentos
    })
  }
}
