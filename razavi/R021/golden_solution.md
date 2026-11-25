# Golden Solution - R021

## Reference answer

The gate and source fix $V_{GS}=1\,\mathrm V$, while the bulk input gives
$$V_{SB}=1\,\mathrm V-V_{in},\qquad V_{out}=3\,\mathrm V-R_1I_D.$$

In saturation,
$$I_D=\frac{\beta}{2}(1\,\mathrm V-V_{TH})^2,\qquad V_{out}\ge2\,\mathrm V-V_{TH}.$$
At $V_{in}=0$, $V_{TH}=0.8934\,\mathrm V$ and the saturation condition permits $\beta R_1\le333.1\,\mathrm{V^{-1}}$. For $\beta R_1=10\,\mathrm{V^{-1}}$, $V_{out}$ is 2.943 V at $V_{in}=0$ and 2.022 V at 1.5 V. A medium load can enter triode and flatten above the 1 V source.

In triode,
$$I_D=\beta\left[(1\,\mathrm V-V_{TH})(V_{out}-1\,\mathrm V)-\frac{(V_{out}-1\,\mathrm V)^2}{2}\right].$$

For $V_{in}>1\,\mathrm V$, the source–bulk junction is forward biased. Weak and strong forward-bias behavior depends on missing junction and temperature parameters, so the 1.5–3 V continuation is not unique.

## Answer figures

![V_out versus V_in](/q/R021/solution-vout.svg)

The figure compares light, medium and heavy MOS-only loads through 1.5 V and shades the unquantified junction region.

## Grading notes

+2: correct terminal voltages, body-effect direction, load-dependent saturation or triode condition, requested plot, and an explicit limit on the forward-biased continuation.
+1: correct body-driven trend with one missing load or model condition.
−2: treats $V_{in}$ as the gate input, claims load-independent output, or asserts a unique full-range curve without a junction model.
