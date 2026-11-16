两条曲线在阈值电压（threshold voltage）以下均为零，在阈值以上均为平方律（square law）抛物线；在整个扫描范围内，两个器件都保持在饱和区（saturation region）。在 $|V_{GS}| = 3$ V 时：NFET ≈ 35.5 mA（若计入因子 $1+\lambda|V_{DS}| = 1.3$，则 ≈ 46.2 mA），PFET ≈ 9.3 mA（计入 $1+\lambda|V_{DS}| = 1.6$ 时 ≈ 14.9 mA）。在最大栅极驱动下，NFET 的电流约为 PFET 的 3.8 倍；若计入沟道长度调制（channel-length modulation，CLM），则约为 3.1 倍。

推导采用平方律，$L$ 取有效沟道长度（effective channel length），且 $V_{SB} = 0$，因此没有体效应（body effect）：
- 饱和条件：对所有 $|V_{GS}| \le 3$ V，均有 $|V_{DS}| = 3\ \mathrm{V} > |V_{GS}| - |V_{TH}|$。
- NFET：当 $V_{GS} > 0.7$ V 时，$I_D = \tfrac12(134\ \mu\mathrm{A/V^2})(100)(V_{GS}-0.7)^2 = 6.71\ \mathrm{mA/V^2}\,(V_{GS}-0.7)^2$，低于该值时为零。$V_{GS}$ = 1、1.5、2、2.5、3 V 时分别为 0.60、4.30、11.3、21.8、35.5 mA（计入 CLM，×1.3：0.79、5.59、14.8、28.3、46.2 mA）。
- PFET：当 $|V_{GS}| > 0.8$ V 时，$|I_D| = \tfrac12(38.4\ \mu\mathrm{A/V^2})(100)(|V_{GS}|-0.8)^2 = 1.92\ \mathrm{mA/V^2}\,(|V_{GS}|-0.8)^2$。$|V_{GS}|$ = 1、1.5、2、2.5、3 V 时分别为 0.077、0.94、2.76、5.54、9.28 mA（计入 CLM，×1.6：0.12、1.50、4.42、8.87、14.9 mA）。
- 注：实际上，在略低于阈值处还有很小的亚阈值（subthreshold）电流流过；平方律模型把它取为零。
