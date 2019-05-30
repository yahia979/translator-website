
translate(Str,Str2):-
             atomic_list_concat(L2,' ',Str),
             translate_loop(L2,L),
             atomic_list_concat(L,' ',Str2).

translate_loop([],[]):-!.
translate_loop([H|T],[H2|T2]):-

                         translate_loop(T,T2),
                        change(H,X),
                         H2 = X.
:-consult('change.pl').
