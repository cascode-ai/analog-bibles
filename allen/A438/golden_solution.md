# Golden Solution - A438

## Reference answer

$I = V_{REF}/R = 5\ \mathrm{V}/R$, so that $v_{OUT} = V_{REF}\sum b_i 2^{-i}$: 1 LSB = $V_{REF}/2^N$, full-scale range $RI = V_{REF}$ and full-scale value $V_{REF}(1 - 2^{-N})$ (e.g. R = 1 kΩ → I = 5 mA).

If one instead requires the all-ones output to equal $V_{REF}$, $RI(1 - 2^{-N}) = V_{REF}$ and $I = V_{REF}/[R(1 - 2^{-N})]$.

## Grading notes

+2: $I = 5\ \mathrm{V}/R$ (full-scale range = $V_{REF}$), or $I = 5\ \mathrm{V}/[R(1 - 2^{-N})]$ with the all-ones-equals-$V_{REF}$ convention stated. +1: either result without stating which convention is used. −2 (asserted as fact): $I = V_{REF}/2R$, $V_{REF}/(2^NR)$ or another value from a wrong weighting.
