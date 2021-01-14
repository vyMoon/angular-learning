import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  form = this.formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.minLength(5)],
    adress: this.formBuilder.group({
      state: [''],
      city: [''],
      street: [''],
      zipCode: [''],
    }),
    notes: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  })

  get notes(): FormArray {
    return this.form.get('notes') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(form => {
      console.log(form)
    })
  }

  handleAddNote(): void {
    this.notes.push(this.formBuilder.control(''))
  }

  handleRemoveNote(index: number): void {
    this.notes.controls.splice(index, 1)
  }

  handleClickSetDefaultValues(): void {
    // this.form.setValue({
    //   name: 'Mike',
    //   surname: 'Smith',
    //   adress: {
    //     state: 'Marocco',
    //     city: 'ASDF',
    //     street: 'asdf',
    //     zipCode: '123456'
    //   }
    // })
  }

  handleClickClearAdress(): void {
    this.form.patchValue({
      adress: {
        street: null,
        state: null,
        city: null,
        zipCode: null,
      }
    })
  }

}
