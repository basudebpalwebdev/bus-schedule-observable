import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        MatCardModule
    ],
    exports: [
        MatToolbarModule,
        MatGridListModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        MatCardModule
    ]
})
export class MaterialModule { }
