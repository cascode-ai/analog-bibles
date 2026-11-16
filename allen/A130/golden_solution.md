# Golden Solution - A130

## Reference answer

Circuits 5 and 6, equally: $R_{out} = 1/(g_{ds1} + g_{ds2}) = 1/(2\lambda I)$.

The loads in circuits 5 and 6 are current sources (gate at a dc bias), so the output sees only the two drain resistances in parallel. Equal λ and equal current make the two equal. In circuits 1–4 the load transistor acts as a diode or source follower, giving $R_{out} \approx 1/g_m$ (or $1/(g_m + g_{mbs})$), orders of magnitude lower.

## Grading notes

+2: circuits 5 and 6 (both, as equal), with the $1/(g_{ds1} + g_{ds2})$ argument. +1: only one of them named, with correct reasoning that would apply to both. 0: correct reasoning but a claim that one is clearly higher than the other because of $K'$. −2 (asserted as fact): any of circuits 1–4 named, or $R_{out}$ of circuits 5/6 claimed to depend on the input-device $g_m$.
