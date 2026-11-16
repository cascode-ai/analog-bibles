# Golden Solution - A243

## Reference answer

With the source as drawn, the inverting input of the ideal op amp is at $v_2 - v_1/\mathrm{CMRR}$, so

$v_{out} = A_v\left[v_1 - \left(v_2 - \dfrac{v_1}{\mathrm{CMRR}}\right)\right] = A_v(v_1 - v_2) + \dfrac{A_v}{\mathrm{CMRR}}v_1 = A_v(v_1 - v_2) + A_c v_1$.

- Pure common-mode input, $v_1 = v_2 = v_{cm}$: $v_{out} = A_v v_{cm}/\mathrm{CMRR} = A_c v_{cm}$, exactly the common-mode output required by the definition.
- Pure differential input, $v_1 = -v_2 = v_{id}/2$: $v_{out} = A_v v_{id} + A_c v_{id}/2 = A_v v_{id}(1 + 1/(2\,\mathrm{CMRR})) \approx A_v v_{id}$, since $\mathrm{CMRR} \gg 1$.
- General input $v_1 = v_{cm} + v_{id}/2$: $v_{out} = A_v v_{id} + A_c v_{cm} + A_c v_{id}/2 \approx A_v v_{id} + A_c v_{cm}$; the error term $A_c v_{id}/2$ is a fraction $1/(2\,\mathrm{CMRR})$ of the differential output and is negligible.

So the single source $v_1/\mathrm{CMRR}$ reproduces the common-mode output (the ± in the definition is covered by the sign of CMRR, i.e. the polarity of the source). Driving it from $(v_1 + v_2)/2$ instead of $v_1$ would make it exact; driving it from $v_1$ is a good approximation because CMRR is large.

## Grading notes

+2: writes the ideal op amp's differential input including the source, shows $v_{out} = A_c v_{cm}$ for $v_1 = v_2 = v_{cm}$ using $\mathrm{CMRR} = A_v/A_c$, and notes that the extra term for differential signals is negligible because CMRR ≫ 1 (or that the source is exact for pure common-mode input). +1: the common-mode case shown correctly but the effect on differential signals not discussed. 0: only a verbal argument ("it adds a common-mode term") without the calculation. −2 (asserted as fact): output $A_v v_{cm}\cdot\mathrm{CMRR}$, CMRR defined as $A_c/A_v$ so that the source would scale wrongly, or the claim that the source changes the differential gain significantly.
