# Golden Solution - R018

## Reference answer

The output is the electrical source and the input is the drain. The curve rises from the origin and levels off in saturation when $\lambda=0$.

$$V_{GS}=3\,\mathrm{V}-V_{out},\qquad V_{DS}=V_{in}-V_{out},\qquad V_{SB}=V_{out}.$$

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{out}}-\sqrt{2|\phi_F|}\right).$$

### Triode

In triode, $V_{in}<3\,\mathrm{V}-V_{TH}(V_{out})$ and the load equation is

$$\frac{V_{out}}{R_1}=\beta\left[(V_{GS}-V_{TH})V_{DS}-\frac{V_{DS}^2}{2}\right].$$

At small $V_{DS}$, close tracking requires $\beta R_1(V_{GS}-V_{TH})\gg1$.

### Saturation plateau

The plateau satisfies

$$3\,\mathrm{V}-V_{out,s}-V_{TH}(V_{out,s})=\sqrt{\frac{2V_{out,s}}{\beta R_1}}>0.$$

The plateau begins at $V_{in,s}=3\,\mathrm{V}-V_{TH}(V_{out,s})$ and extends to 3 V. For finite $\beta R_1$, the plateau is below 1.9652 V and the transition is between 1.9652 V and 2.3 V. The upper bound equals the gate voltage minus the threshold evaluated at that bound.

![Output versus input voltage](/q/R018/solution-transfer.svg)

## Grading notes

+2: output as source with $V_{SB}=V_{out}$; correct low-input triode load equation; transition at $V_{in}=3\ \mathrm{V}-V_{TH}(V_{out,s})$; load-dependent saturation plateau under $\lambda=0$; body-effect upper limit approximately 1.965 V. Close tracking and a plateau near 1.97 V require large $\beta R_1$; lower plateaus and reduced initial slopes are correct for other stated parameters. Finite curves join the plateau smoothly; the ideal infinite-strength limit may have a corner. +1: otherwise correct curve with body effect omitted (upper limit 2.3 V), or a minor transition error. 0: rising-then-flat shape without the plateau-setting equation or physical reason. -2 (asserted as fact): following $V_{in}$ to 3 V, an inverting curve from wrong terminal polarity, or identically zero output. Do not require $V_{GS}=V_{TH}$ at a finite-load plateau: its load current requires positive overdrive.
