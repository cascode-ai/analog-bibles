$V_{onn} \approx 1.43$ V；$V_{onp} \approx V_{DD} - 1.78$ V（例如 $V_{DD}$ = 2.5 V 时为 0.72 V）。

- $V_{onn} = V_{DSN5}(sat) + V_{GSN1} = \sqrt{2\cdot100/(110\cdot10)} + 0.7 + \sqrt{2\cdot50/(110\cdot10)} = 0.426 + 0.7 + 0.302 = 1.428$ V。
- $V_{onp} = V_{DD} - V_{SDP5}(sat) - V_{SGP1} = V_{DD} - \sqrt{2\cdot100/(50\cdot10)} - 0.7 - \sqrt{2\cdot50/(50\cdot10)} = V_{DD} - 0.632 - 0.7 - 0.447 = V_{DD} - 1.780$ V。
- $V_{onn} + (V_{DD} - V_{onp}) = 3.21$ V 是出现死区（dead zone）的临界电源电压：当 $V_{DD} < 3.21$ V 时，$V_{onp} < V_{onn}$，在 $V_{onp} < V_{icm} < V_{onn}$ 范围内两级都不能完全导通（例如 $V_{DD}$ = 2.5 V 时为 0.72–1.43 V）；当 $V_{DD} > 3.21$ V 时，在 $V_{onn}$ 与 $V_{onp}$ 之间两级都导通。
