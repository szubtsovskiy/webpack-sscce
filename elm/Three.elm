module Three exposing (main)

import Browser
import Html exposing (Html, text)


main : Program () () Never
main =
    Browser.element
        { init = always ( (), Cmd.none )
        , update = \_ m -> ( m, Cmd.none )
        , view = view
        , subscriptions = always Sub.none
        }


view : () -> Html Never
view () =
    text "See, I am Three!"
