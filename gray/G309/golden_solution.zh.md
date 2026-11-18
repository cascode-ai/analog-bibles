$C ≈ 7.8$ pF；压摆率 ≈ 77 V/μs，约为原来 2 V/μs 的 38.5 倍。

- 原电路：$g_{m1} = 10\text{ μA}/26\text{ mV} = 0.385$ mA/V；$\omega_u = g_{m1}/C = 0.385\text{ mA/V}/10\text{ pF} = 3.85 \times 10^7$ rad/s（6.1 MHz）；SR $= I_{EE}/C = 20\text{ μA}/10\text{ pF} = 2$ V/μs。
- PMOS 输入：要得到相同的 $\omega_u$，需要 $C = g_m/\omega_u = 300\text{ μA/V}/3.85 \times 10^7 = 7.8$ pF。
- 新的 SR $= 600\text{ μA}/7.8\text{ pF} = 77$ V/μs。改善倍数 $= (I_{xm}/g_{mI})_{\text{new}}/(I_{xm}/g_{mI})_{\text{old}} = (600/300\text{ V})/(20\text{ μA}/0.385\text{ mA/V}) = 2\text{ V}/0.052\text{ V} = 38.5$。
