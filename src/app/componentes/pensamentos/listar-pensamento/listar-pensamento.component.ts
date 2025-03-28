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
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';

  ngOnInit(): void {
    this.service
      .listar(this.paginaAtual, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  carregandoMaisPensamentos() {
    this.service
      .listar(++this.paginaAtual, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...this.listaPensamentos);
        if (listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro)
    .subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos
    })
  }

  listarFavoritos(){
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listarPensamentosFavoritos(this.paginaAtual,this.filtro).subscribe(listaPensamentosFavoritos => {
      this.listaPensamentos = listaPensamentosFavoritos
    })
  }
}
