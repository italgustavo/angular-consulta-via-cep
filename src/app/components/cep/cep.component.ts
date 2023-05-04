import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/models/cep.model';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cepSeach: string = '';
  endereco!: Cep;
  errorService: boolean = false;

  constructor(private cepService:CepService) { }

  ngOnInit(): void {
  }

  public buscar(cep: string){
    this.cepService.buscarEndereco(cep).subscribe(
      res => {
        this.endereco = res
      },
      error =>{
        this.errorService = error
      }
    )
  }
}
