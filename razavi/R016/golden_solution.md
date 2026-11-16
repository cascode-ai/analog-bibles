# Golden Solution - R016

## Reference answer

$V_{out} = 0$ for $V_{in} \le 0.7$ V; for larger $V_{in}$, $M_1$ acts as a source follower with $V_{out}$ as its source and the 1-V node as its drain, so $V_{out}$ rises with slope < 1; above roughly $V_{in} \approx 1.9$ V $M_1$ enters triode and $V_{out}$ flattens, approaching but never exceeding 1 V.
- The current through $R_1$ must come from the 1-V source through $M_1$, so $0 \le V_{out} < 1$ V: the $V_{out}$ node is the source, the 1-V node the drain; $V_{GS} = V_{in} - V_{out}$, $V_{SB} = V_{out}$.
- On when $V_{in} > V_{out} + V_{TH}(V_{out})$; at $V_{out} = 0$ this is 0.7 V.
- Saturation while $1 - V_{out} > V_{in} - V_{out} - V_{TH}$, i.e. $V_{in} < 1 + V_{TH}(V_{out})$: $V_{out} = \tfrac12\beta R_1(V_{in} - V_{out} - V_{TH})^2$, i.e. $V_{out} = V_{in} - V_{TH}(V_{out}) - \sqrt{2V_{out}/(\beta R_1)}$. The slope is below 1 (finite $\beta R_1$ and body effect, $V_{TH}$ rising from 0.7 V toward 0.89 V as $V_{out}$ → 1 V).
- For $V_{in} \gtrsim 1 + V_{TH} \approx 1.8$–1.9 V: triode, $V_{out} \to 1$ V asymptotically as $V_{in}$ increases (how close depends on $\beta R_1$).

## Grading notes

+2: zero output up to $V_{in} = 0.7$ V, follower region with slope < 1 ($V_{out}$ is the source, body effect raising $V_{TH}$), and saturation of $V_{out}$ just below 1 V once $M_1$ enters triode (around $V_{in} \approx 1.8$–1.9 V). +1: correct shape with the triode break point misplaced or the body effect ignored. 0: follower region right but the 1-V ceiling missed (output keeps following $V_{in}$). -2 (asserted as fact): the 1-V node taken as the source (e.g., an inverting common-source curve), $V_{out}$ exceeding 1 V, or $V_{out}$ decreasing with $V_{in}$.
