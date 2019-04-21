﻿/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule  } from 'ngx-color-picker';

import {
    AnalyticsService,
    AutocompleteComponent,
    CachingInterceptor,
    CanDeactivateGuard,
    CheckboxGroupComponent,
    ClipboardService,
    CodeComponent,
    CodeEditorComponent,
    ColorPickerComponent,
    ConfirmClickDirective,
    ControlErrorsComponent,
    CopyDirective,
    DarkenPipe,
    DatePipe,
    DateTimeEditorComponent,
    DayOfWeekPipe,
    DayPipe,
    DialogRendererComponent,
    DialogService,
    DisplayNamePipe,
    DurationPipe,
    ExternalLinkDirective,
    FileDropDirective,
    FileSizePipe,
    FocusOnInitDirective,
    FormErrorComponent,
    FromNowPipe,
    FullDateTimePipe,
    HoverBackgroundDirective,
    IFrameEditorComponent,
    IgnoreScrollbarDirective,
    ImageSourceDirective,
    IndeterminateValueDirective,
    ISODatePipe,
    JsonEditorComponent,
    KeysPipe,
    KNumberPipe,
    LightenPipe,
    LoadingInterceptor,
    LoadingService,
    LocalStoreService,
    MessageBus,
    ModalDialogComponent,
    ModalTargetDirective,
    ModalViewDirective,
    MoneyPipe,
    MonthPipe,
    OnboardingService,
    OnboardingTooltipComponent,
    PagerComponent,
    PanelComponent,
    PanelContainerDirective,
    ParentLinkDirective,
    PopupLinkDirective,
    ProgressBarComponent,
    ResourceLoaderService,
    RootViewComponent,
    SafeHtmlPipe,
    ScrollActiveDirective,
    ShortcutComponent,
    ShortcutService,
    ShortDatePipe,
    ShortTimePipe,
    SortedDirective,
    StarsComponent,
    TagEditorComponent,
    TemplateWrapperDirective,
    TitleComponent,
    TitleService,
    ToggleComponent,
    TooltipDirective,
    TransformInputDirective
} from './declarations';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        ColorPickerModule
    ],
    declarations: [
        AutocompleteComponent,
        CheckboxGroupComponent,
        ColorPickerComponent,
        ConfirmClickDirective,
        ControlErrorsComponent,
        CodeComponent,
        CodeEditorComponent,
        CopyDirective,
        DarkenPipe,
        DateTimeEditorComponent,
        DatePipe,
        DayOfWeekPipe,
        DayPipe,
        DialogRendererComponent,
        DisplayNamePipe,
        DurationPipe,
        ExternalLinkDirective,
        FileDropDirective,
        FileSizePipe,
        FocusOnInitDirective,
        FormErrorComponent,
        FromNowPipe,
        FullDateTimePipe,
        HoverBackgroundDirective,
        IFrameEditorComponent,
        IgnoreScrollbarDirective,
        ImageSourceDirective,
        IndeterminateValueDirective,
        ISODatePipe,
        JsonEditorComponent,
        KeysPipe,
        KNumberPipe,
        LightenPipe,
        ModalDialogComponent,
        ModalTargetDirective,
        ModalViewDirective,
        MoneyPipe,
        MonthPipe,
        OnboardingTooltipComponent,
        PagerComponent,
        PanelContainerDirective,
        PanelComponent,
        ParentLinkDirective,
        PopupLinkDirective,
        ProgressBarComponent,
        RootViewComponent,
        SafeHtmlPipe,
        ScrollActiveDirective,
        ShortcutComponent,
        ShortDatePipe,
        ShortTimePipe,
        SortedDirective,
        StarsComponent,
        TagEditorComponent,
        TemplateWrapperDirective,
        TitleComponent,
        ToggleComponent,
        TooltipDirective,
        TransformInputDirective
    ],
    exports: [
        AutocompleteComponent,
        CheckboxGroupComponent,
        CodeEditorComponent,
        CommonModule,
        CodeComponent,
        ColorPickerComponent,
        ConfirmClickDirective,
        ControlErrorsComponent,
        CopyDirective,
        DarkenPipe,
        DatePipe,
        DateTimeEditorComponent,
        DayOfWeekPipe,
        DayPipe,
        DialogRendererComponent,
        DisplayNamePipe,
        DurationPipe,
        ExternalLinkDirective,
        FileDropDirective,
        FileSizePipe,
        FocusOnInitDirective,
        FormErrorComponent,
        FormsModule,
        FromNowPipe,
        FullDateTimePipe,
        HoverBackgroundDirective,
        IFrameEditorComponent,
        IgnoreScrollbarDirective,
        ImageSourceDirective,
        IndeterminateValueDirective,
        ISODatePipe,
        JsonEditorComponent,
        KeysPipe,
        KNumberPipe,
        LightenPipe,
        ModalDialogComponent,
        ModalTargetDirective,
        ModalViewDirective,
        MoneyPipe,
        MonthPipe,
        OnboardingTooltipComponent,
        PagerComponent,
        PanelContainerDirective,
        PanelComponent,
        ParentLinkDirective,
        PopupLinkDirective,
        ProgressBarComponent,
        ReactiveFormsModule,
        RootViewComponent,
        SafeHtmlPipe,
        ScrollActiveDirective,
        ShortcutComponent,
        ShortDatePipe,
        ShortTimePipe,
        SortedDirective,
        StarsComponent,
        TagEditorComponent,
        TemplateWrapperDirective,
        TitleComponent,
        ToggleComponent,
        TooltipDirective,
        TransformInputDirective
    ]
})
export class SqxFrameworkModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SqxFrameworkModule,
            providers: [
                AnalyticsService,
                CanDeactivateGuard,
                ClipboardService,
                DialogService,
                LocalStoreService,
                LoadingService,
                MessageBus,
                OnboardingService,
                ResourceLoaderService,
                ShortcutService,
                TitleService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: LoadingInterceptor,
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: CachingInterceptor,
                    multi: true
                }
            ]
        };
    }
 }