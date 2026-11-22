# 详细步骤 - A425

当所有电流沉都可能有误差时，误差会在多个位同时导通的码上相加；最坏情况下，它们在满量程处以相同符号全部相加。于是 INL 条件变成一个统一的误差预算：所有电流沉误差之和不得超过半个 LSB。任何分配预算的方式都有效；下面计算两种自然的选择。

### 第 1 步 — 最坏情况误差

设位 $b_i$ 的电流沉流过 $(1+\varepsilon_i)\,I/2^{i+1}$。对各位为 $b_i$ 的码，输出误差为

$$
\Delta I_{OUT}=\sum_{i=0}^{N-1}b_i\,\varepsilon_i\frac{I}{2^{i+1}} .
$$

当所有位都导通且所有 $\varepsilon_i$ 同号时，其幅值最大。要求它不超过 $\tfrac12\,\mathrm{LSB}=I/2^{N+1}$：

$$
\sum_{i=0}^{N-1}|\varepsilon_i|\frac{I}{2^{i+1}}\le\frac{I}{2^{N+1}} .
$$

使满量程误差保持在半个 LSB 以内，就保证了每个码上 $|\mathrm{INL}|\le0.5$ LSB，因为其他码只包含其中一部分项。

### 第 2 步 — 每个电流沉平分预算

给 $N$ 个电流沉中的每一个分配不超过 $\tfrac1N\cdot\tfrac12$ LSB 的误差：

$$
|\varepsilon_i|\frac{I}{2^{i+1}}\le\frac1N\cdot\frac{I}{2^{N+1}}
\quad\Rightarrow\quad
|\varepsilon_i|\le\frac{2^{i-N}}N,
$$

即容差为 $\pm100\cdot2^{i-N}/N$ %，等于单个电流沉时的值除以 $N$。此时 MSB 电流沉需要 $\pm100/(N\cdot2^N)$ %，LSB 电流沉需要 $\pm50/N$ %。

### 第 3 步 — 所有电流沉采用同一容差

或者，给每个电流沉相同的相对容差 $\varepsilon$：

$$
\varepsilon\,I\sum_{i=0}^{N-1}\frac1{2^{i+1}}=\varepsilon\,I\bigl(1-2^{-N}\bigr)\le\frac{I}{2^{N+1}}
\quad\Rightarrow\quad
\varepsilon\le\frac1{2^{N+1}-2}\approx2^{-(N+1)} ,
$$

约为 MSB 单独有误差时容差的一半，并适用于每个电流沉。

### 第 4 步 — 示例，N = 10

| 分配方式 | MSB 电流沉 | LSB 电流沉 |
|---|---|---|
| 仅单个电流沉有误差（上一题） | ±0.098 % | ±50 % |
| 平分预算 | ±0.0098 % | ±5 % |
| 统一容差 | ±0.049 % | ±0.049 % |

两种分配都保证 $|\mathrm{INL}|\le0.5$ LSB。统一容差更便于规定，由 MSB 决定；平分预算使 MSB 更加严格，但小电流沉的精度可以低得多。无论哪种情况，大电流沉都在误差预算中占主导。
