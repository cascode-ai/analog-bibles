# Golden Solution - A124

## Reference answer

$v_{out}/v_{in} \approx -24.8$ V/V.

$g_{m1} = \sqrt{2 \cdot 50\ \mu \cdot 5 \cdot 100\ \mu} = 223.6\ \mu$S, $g_{ds1} = 0.05 \cdot 100\ \mu = 5\ \mu$S, $g_{ds2} = 0.04 \cdot 100\ \mu = 4\ \mu$S. M2 is a current-sink load (gate at ac ground), so $A_v = -g_{m1}/(g_{ds1} + g_{ds2}) = -223.6/9 = -24.8$. Output resistance 111 kΩ.

## Grading notes

+2: $A_v$ = −24 to −25.5. +1: a slip in one conductance (e.g. both λ taken as 0.04, giving −28) with the right topology. 0: the right formula but the wrong device's $g_m$ with the flaw noted, or no number. −2 (asserted as fact): $g_{m1}$ computed with $K'_N$ (−36.9), M2 treated as an active (diode) load, gain magnitude below 1, or a positive gain.
