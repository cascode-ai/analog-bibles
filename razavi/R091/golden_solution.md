# Golden Solution - R091

## Reference answer

The source follower has $V_{out}=0$ until $V_{in}=V_{TH0}=0.7\ \mathrm V$. Let $I=V_{out}/R_S$, $D=V_{DD}-(R_D+R_S)I$, and $U=V_{in}-V_{out}-V_{TH}(V_{out})$, where $V_{TH}(v)=V_{TH0}+\gamma(\sqrt{2|\phi_F|+v}-\sqrt{2|\phi_F|})$.

- Saturation ($D\ge U>0$): $V_{in}=IR_S+V_{TH}(IR_S)+\sqrt{2I/\beta}$. The slope starts at zero and remains below one.
- Triode entry: solve $V_{DD}-(R_D+R_S)I_*=\sqrt{2I_*/\beta}$. The point is $(I_*R_S+V_{TH}(I_*R_S)+\sqrt{2I_*/\beta},\,I_*R_S)$. The sweep enters triode only if this input is below 3 V.
- Triode ($0<D<U$): solve $I=\beta(UD-D^2/2)$. The output flattens toward $V_{DD}R_S/(R_D+R_S)$ as the channel resistance falls.

![R091 output transfer characteristic](/q/R091/solution-vout.svg)

## Grading notes

- +2 for zero below 0.7 V; a follower region with slope < 1 (body effect; the exact saturation equation with $V_{TH}(V_{out})$ is enough); triode entry when the drain voltage $V_{DD} - I_DR_D$ drops to $V_{in} - V_{TH}$, which happens within 0–3 V only if $R_D$ (and β) is large enough; and, once in triode, $V_{out}$ flattening toward (bounded by) $V_{DD}R_S/(R_D+R_S)$.
- +1 for follower part right, the effect of $R_D$ mentioned only vaguely; or every region and the triode-entry condition derived exactly but the flattening toward the ceiling $V_{DD}R_S/(R_D+R_S)$ never mentioned.
- 0 for follower part right but $R_D$ ignored and a slope ≈ 0.85 up to 3 V asserted for any $R_D$.
- −2 for asserting inverting characteristic, slope above 1, or nonzero output below the threshold.
