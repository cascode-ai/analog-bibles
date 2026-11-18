$R_{in} = r_{ds1}\,\Big\|\,\dfrac{r_{ds2}+r_{ds3}}{1+g_{m2}r_{ds2}} = \dfrac{r_{ds1}(r_{ds2}+r_{ds3})}{r_{ds1}+r_{ds2}+r_{ds3}+g_{m2}r_{ds2}r_{ds1}}$。

- 输入节点看到的是 M1 到地的 $r_{ds1}$，与从共栅（common-gate）管 M2 源极看进去的电阻并联。
- 漏极接电阻 $R_D$ 时从源极看进去的电阻为 $(r_{ds2}+R_D)/(1+g_{m2}r_{ds2})$；输出开路时 $R_D = r_{ds3}$。
- 由于 $r_{ds3} \sim r_{ds2}$，该电阻 ≈ $2/g_{m2}$，因此 $R_{in} \approx 2/g_{m2}$（作为比较，输出短路时为 $r_{ds1}\|[r_{ds2}/(1+g_{m2}r_{ds2})] \approx 1/g_{m2}$）。
