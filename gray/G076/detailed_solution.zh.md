# 详细步骤 - G076

先由均匀掺杂基区求出饱和电流与基区宽度的关系，再求使两个集电极电流相等、从而两个输出相等所需的基射电压差。

### 第 1 步 — 饱和电流与基区宽度

对受主浓度为 $N_A$ 的均匀掺杂基区，少子分布在基区宽度 $W_B$ 上呈线性，因此

$$
I_S=\frac{qAD_nn_i^2}{N_AW_B}\quad\Rightarrow\quad I_S\propto\frac1{W_B}.
$$

两个晶体管的其他因素（$A$、$N_A$、$D_n$、$n_i$）都相同，故

$$
\frac{I_{S1}}{I_{S2}}=\frac{W_{B2}}{W_{B1}},\qquad \frac{\Delta I_S}{I_S}=-\frac{\Delta W_B}{W_B}.
$$

### 第 2 步 — 失调条件

输入失调电压是使 $V_{od}=0$ 的差模输入。集电极电阻相等时，这要求 $I_{C1}=I_{C2}$。利用 $I_C=I_S\exp(V_{BE}/V_T)$，

$$
V_{OS}=V_{BE1}-V_{BE2}=V_T\ln\frac{I_{C1}}{I_{S1}}-V_T\ln\frac{I_{C2}}{I_{S2}}=V_T\ln\frac{I_{S2}}{I_{S1}}=V_T\ln\frac{W_{B1}}{W_{B2}} .
$$

尾电阻只决定共模电流，不进入 $V_{OS}$，因此 $R_{\text{TAIL}}\to\infty$ 不改变结果。

### 第 3 步 — 数值

对 10% 的失配，利用线性化 $\ln(1+x)\approx x$：

$$
|V_{OS}|\approx V_T\frac{\Delta W_B}{W_B}=(26\ \mathrm{mV})(0.1)=2.6\ \mathrm{mV}.
$$

若 10% 严格相对其中一个器件而言，则为 $V_T\ln1.1=2.5$ mV。基区较宽的晶体管 $I_S$ 较小，需要较大的 $V_{BE}$ 才能流过相同电流。基区宽度失配也会按比例改变 $\beta_F$，但基极没有串联电阻时，由此产生的基极电流差不会造成失调电压。
