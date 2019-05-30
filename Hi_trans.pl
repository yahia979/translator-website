:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_parameters)).

:- consult('string.pl').

server(Port) :-
        http_server(http_dispatch, [port(Port)]).

headers:-
        format('Access-Control-Allow-Origin: *~n'),
        format('Content-type: application/json; charset=utf-8~n~n').

:- http_handler(/, request_response,[]).
request_response(Request) :-
        headers,
        http_parameters(Request, [query(S, []) ]),
        translate(S, R),
        format('~p', [R]).
