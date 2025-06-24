import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';

// ✅ 기본 플러그인
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import {
    Bold, Italic, Underline, Strikethrough,
    Code, Subscript, Superscript
} from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Heading } from '@ckeditor/ckeditor5-heading';
import {
    Image, ImageCaption, ImageStyle, ImageToolbar,
    ImageUpload, PictureEditing, ImageResize
} from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { FontFamily, FontSize, FontColor, FontBackgroundColor } from '@ckeditor/ckeditor5-font';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { SpecialCharacters, SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters';

// ✅ 이모지 플러그인 import (순서: alpha)
import Emojis from './emojis/emojis';
import EmojisActivities from './emojis/emojisactivities';
import EmojisFlags from './emojis/emojisflags';
import EmojisFood from './emojis/emojisfood';
import EmojisNature from './emojis/emojisnature';
import EmojisObjects from './emojis/emojisobjects';
import EmojisPeople from './emojis/emojispeople';
import EmojisPlaces from './emojis/emojisplaces';
import EmojisSymbols from './emojis/emojissymbols';

// ✅ 타입 보완
import type { EditorConfig } from '@ckeditor/ckeditor5-core';

export default class ClassicEditor extends ClassicEditorBase {
    public static override builtinPlugins = [
        Essentials,
        Autoformat,
        Bold, Italic, Underline, Strikethrough, Code, Subscript, Superscript,
        BlockQuote,
        Heading,
        Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, PictureEditing, ImageResize,
        Indent,
        Link, LinkImage,
        List,
        MediaEmbed,
        Paragraph,
        PasteFromOffice,
        Table, TableToolbar,
        TextTransformation,
        CodeBlock,
        HorizontalLine,
        SimpleUploadAdapter,
        FindAndReplace,
        FontFamily,
        FontSize,
        FontColor,
        FontBackgroundColor,
        SourceEditing,
        SpecialCharacters,
        SpecialCharactersEssentials,
        // 👇 이모지 플러그인
        Emojis,
        EmojisActivities,
        EmojisFlags,
        EmojisFood,
        EmojisNature,
        EmojisObjects,
        EmojisPeople,
        EmojisPlaces,
        EmojisSymbols,
    ];

    public static override defaultConfig: EditorConfig = {
        toolbar: {
            items: [
                'undo', 'redo',
                '|', 'heading',
                '|', 'bold', 'underline', 'strikethrough',
                '|', 'fontFamily', 'fontSize', 'fontColor', 'fontBackgroundColor',
                '|', 'emojis', 'specialCharacters',
                '|', 'link', 'uploadImage', 'insertTable', 'mediaEmbed',
                '|', 'codeBlock', 'horizontalLine', 'blockQuote',
                '|', 'bulletedList', 'numberedList', 'outdent', 'indent',
                '|', 'findAndReplace', 'sourceEditing'
            ]
        },
        image: {
            styles: {
                options: ['alignLeft', 'alignCenter', 'alignRight']
            },
            resizeOptions: [
                { name: 'resizeImage:original', label: 'Original', value: null },
                { name: 'resizeImage:75', label: '75%', value: '75' },
                { name: 'resizeImage:50', label: '50%', value: '50' },
                { name: 'resizeImage:25', label: '25%', value: '25' }
            ],
            toolbar: [
                'resizeImage',
                '|',
                'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
                '|',
                'linkImage',
                '|',
                'imageTextAlternative'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn', 'tableRow', 'mergeTableCells'
            ]
        },
        fontFamily: {
            options: [
                'default',
                '맑은 고딕/Malgun Gothic, sans-serif',
                '굴림/Gulim, sans-serif',
                '돋움/Dotum, sans-serif',
                '바탕/Batang, serif',
                '궁서/Gungsuh, serif',
                'Arial, Helvetica, sans-serif',
                'Times New Roman, Times, serif',
                'Courier New, Courier, monospace'
            ]
        },
        fontSize: {
            options: [
                'tiny', 'small', 'default', 'big', 'huge'
            ]
        },
        language: 'ko'
    };
}
